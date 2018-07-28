import pymysql

from app.data.config import Config


class MySQL():
    def __init__(self):
        self.config = Config()["database"]["mysql"]

        # Queries
        self.QUERY_CREATE_USER = "create user 'vilokanlabs'@'localhost' identified by '%s';" % (self.config["password"])
        self.QUERY_GRANT_PERMISSION = "grant all privileges on yojaka.* to 'vilokanlabs'@'localhost' with grant option;"
        self.QUERY_CHANGE_DB = "use yojaka;"
        self.QUERY_SELECT_USERS_ALL = "select * from user;"
        self.QUERY_SELECT_USERS_10 = "select * from user limit 10;"
        self.QUERY_SELECT_ALL_TABLES = '''select table_name from information_schema.tables where table_type="BASE TABLE" and table_schema="yojaka";'''

        # Connect to the host
        conn = pymysql.connect(host=self.config["host"],
                               user=self.config["user"],
                               password=self.config["password"])

        self.cursor = conn.cursor()

        # Switch to the database
        self.cursor.execute(self.QUERY_CHANGE_DB)

    def execute(self, query):
        self.cursor.execute(query)
        return self.cursor
