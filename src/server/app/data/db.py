from app.data.firebase import Firebase
from app.data.mysql import MySQL
from app.utils.singleton import Singleton


class DB(metaclass=Singleton):
    def __init__(self):
        self.firebase = Firebase()
        self.mysql = MySQL()
        self.session = dict()

    def init_session(self, session_id):
        """Authentication helper to retrieve the firebase user info from firebase session id"""
        try:
            uid = self.firebase.get_user_uid_from_session(session_id)
            self.session["firebase_session_id"] = session_id
            self.session["firebase_uid"] = uid
            db_user = self.get_user_by_uid(uid, reimport=True)  # Firebase sync enabled in every
            if not db_user:
                raise Exception("User doesn't exist in local database")
            self.session["current_user"] = db_user
            return self.session
        except Exception as e:
            # return str(e), 400  # 400 = Bad Request
            return None

    def get_user_by_uid(self, uid, reimport=False):
        """
        Get user by uid
        :param uid:
        :param reimport: Sync database user from firebase user
        :return:
        """
        user = self.mysql.get_user_by_firebase_uid(uid, reimport=reimport)
        return user

    def get_users_all(self, prefix=""):
        cursor = self.mysql.execute("select id from user;")
        users = cursor.fetchall()
        return users

    def get_user_by_id(self, id):
        cursor = self.mysql.execute("select * from user where id='%s';" % (id))
        user = cursor.fetchone()
        return user

    def get_issues_by_project_id(self, project_id):
        cursor = self.mysql.execute("select * from issues where id='%s';" % (project_id))
        issues = cursor.fetchall()
        return issues

    def check_permission(self, permission_bit, user_id=None):
        """
        :param permission_bit:
        :param user_id: defaults to current user in 'self.session'
        :return: Returns True if queried permissions exist for the user
        """
        ret = False
        try:
            user_id = self.session["current_user"]["id"]
            cursor = self.mysql.execute(
                "select * from permissions where permission_bit='%s' and user_id='%s'"
                % (permission_bit, user_id)
            )
            permission = cursor.fetchone()
            if permission:
                ret = True
        except Exception as e:
            return ret
        return ret

    def create_new_issue(self, project_id, created_by_id, title="", description=""):
        sql_query_project_counter = "(select issue_counter from project where id='%s')" % (project_id)

        sql_query_insert_issue = "INSERT INTO issues (project, count, title, created_by_id, description) " \
                                 "VALUES ('%s', %s, '%s', '%s', '%s');\n" \
                                 % (project_id, sql_query_project_counter, title, created_by_id, description)

        # Inser the new issue, update the project counter
        self.mysql.execute("BEGIN;")
        self.mysql.execute("UPDATE project SET issue_counter=issue_counter+1 WHERE id='%s'; \n" % (project_id))
        self.mysql.execute(sql_query_insert_issue)
        self.mysql.execute("COMMIT;")
        self.mysql.commit()

        # Select and return the latest issue in project
        cursor = self.mysql.execute(
            "select iss.* from issues as iss inner join project as proj on iss.project=proj.id where proj.owner='%s' and "
            "iss.count=proj.issue_counter; "
            % (created_by_id)
        )
        new_issue = cursor.fetchone()
        return new_issue
