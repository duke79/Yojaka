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
        from app.data.mysql import MySQL
        mysql = MySQL()
        cursor = mysql.execute("select id from user;")
        users = cursor.fetchall()
        return users

    def get_user_by_id(self, id):
        from app.data.mysql import MySQL
        mysql = MySQL()
        cursor = mysql.execute("select * from user where id='%s';" % (id))
        user = cursor.fetchone()
        return user
