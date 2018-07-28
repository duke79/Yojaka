import pymysql
from app.data.config import Config


class MySQLError(Exception):
    pass


class MySQL():
    def __init__(self):
        self.config = Config()["database"]["mysql"]

        # Queries
        self.QUERY_CREATE_USER = "create user 'vilokanlabs'@'localhost' identified by '%s';" % (self.config["password"])
        self.QUERY_GRANT_PERMISSION = "grant all privileges on yojaka.* to 'vilokanlabs'@'localhost' with grant option;"
        self.QUERY_CHANGE_DB = "use yojaka;"
        self.QUERY_SELECT_USERS_ALL = "select * from user;"
        self.QUERY_SELECT_USERS_10 = "select * from user limit 10;"
        self.QUERY_SELECT_ALL_TABLES = """select table_name from information_schema.tables where table_type="BASE TABLE" and table_schema="yojaka";"""
        self.QUERY_INSERT_USER = """INSERT INTO `user` (`name`, `phone_number`, `photo_url`, `email`, `firebase_uid`) VALUES ('%s', '%s', '%s', '%s', '%s');"""
        self.QUERY_UPDATE_USER_NAME = """UPDATE `user` SET `name`='%s' WHERE `id`=%s;"""
        self.QUERY_UPDATE_USER_PHONE_NUMBER = """UPDATE `user` SET `phone_number`='%s' WHERE `id`=%s;"""
        self.QUERY_UPDATE_USER_PHOTO_URL = """UPDATE `user` SET `photo_url`='%s' WHERE `id`=%s;"""
        self.QUERY_UPDATE_USER_EMAIL = """UPDATE `user` SET `email`='%s' WHERE `id`=%s;"""
        self.QUERY_UPDATE_USER_FIREBASE_UID = """UPDATE `user` SET `firebase_uid`='%s' WHERE `id`=%s;"""

        # Connect to the host
        self.conn = pymysql.connect(host=self.config["host"],
                                    user=self.config["user"],
                                    password=self.config["password"])

        self.cursor = self.conn.cursor()

        # Switch to the database
        self.cursor.execute(self.QUERY_CHANGE_DB)

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.commit()

    def execute(self, query):
        self.cursor.execute(query)
        return self.cursor

    def commit(self):
        self.conn.commit()

    def import_one_firebase_user(self, user, reimport=False):
        """" A user is imported only if it doesn't already exist in mysql """
        ret = 0
        name = user.display_name
        phone = user.phone_number
        photo = user.photo_url
        email = user.email
        firebase_uid = user.uid
        cursor = self.execute("""select * from user where `firebase_uid`='%s';""" % (firebase_uid))
        rows = cursor.fetchall()
        if len(rows) < 1:
            self.execute(self.QUERY_INSERT_USER % (name, phone, photo, email, firebase_uid))
            ret += 1
        elif reimport:
            mysql_user = rows[0]
            # if not name:
            #     name = ''
            # if not phone:
            #     phone = ''
            # if not photo:
            #     photo = ''
            # if not email:
            #     email = ''
            if not firebase_uid:
                raise MySQLError("firebase UID not valid")

            # phone, photo, email, firebase_uid,
            query = self.QUERY_UPDATE_USER_NAME % (name, mysql_user[1])
            res = self.execute(query)
            query = self.QUERY_UPDATE_USER_PHONE_NUMBER % (phone, mysql_user[1])
            res = self.execute(query)
            query = self.QUERY_UPDATE_USER_PHOTO_URL % (photo, mysql_user[1])
            res = self.execute(query)
            query = self.QUERY_UPDATE_USER_EMAIL % (email, mysql_user[1])
            res = self.execute(query)
            query = self.QUERY_UPDATE_USER_FIREBASE_UID % (firebase_uid, mysql_user[1])
            res = self.execute(query)
            # print(str(res._result.message, "utf-8"))
            ret += 1
        return ret

    def import_all_firebase_users(self, reimport=False):
        """" A user is imported only if it doesn't already exist in mysql """
        from app.data.firebase import Firebase
        ret = 0
        firebase = Firebase()
        firebase_users = firebase.getUsers()
        for user in firebase_users:
            ret += self.import_one_firebase_user(user, reimport=reimport)
        return ret


if __name__ == "__main__":
    with MySQL() as mysql:
        mysql.import_all_firebase_users()
        mysql_users = mysql.execute("select * from user;")
        for user in mysql_users:
            print(user)
            pass
