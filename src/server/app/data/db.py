from app.data.firebase import Firebase
from app.data.mysql import MySQL
from app.utils.singleton import Singleton


class DB(metaclass=Singleton):
    def __init__(self):
        self.firebase = Firebase()
        self.mysql = MySQL()

    def get_user_uid_from_session(self, session_id):
        return self.firebase.get_user_uid_from_session(session_id)

    def get_user_by_uid(self, uid, reimport=False):
        """
        Get user by uid
        :param uid:
        :param reimport: Sync database user from firebase user
        :return:
        """
        user = self.mysql.get_user_by_firebase_uid(uid, reimport=reimport)
        return user

    def get_user_by_session_id(self, session_id, reimport=False):
        uid = self.get_user_uid_from_session(session_id)
        return self.get_user_by_uid(uid, reimport=reimport)
