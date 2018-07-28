from app.data.firebase import Firebase
from app.data.mysql import MySQL
from app.utils.singleton import Singleton


class DB(metaclass=Singleton):
    def __init__(self):
        self.firebase = Firebase()
        self.mysql = MySQL()

    def get_user_uid_from_session(self, session_id):
        return self.firebase.get_user_uid_from_session(session_id)
