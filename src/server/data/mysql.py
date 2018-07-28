import sys

import pymysql

from data.config import Config

config = Config()["database"]["mysql"]
conn = pymysql.connect(host=config["host"],
                       user=config["user"],
                       password=config["password"])

cursor = conn.cursor()
QUERY_CREATE_USER = "create user 'vilokanlabs'@'localhost' identified by '%s';" % (config["password"])
QUERY_GRANT_PERMISSION = "grant all privileges on yojaka.* to 'vilokanlabs'@'localhost' with grant option;"
QUERY_CHANGE_DB = "use yojaka;"
QUERY_SELECT_ALL = "select * from user;"
QUERY_SELECT_ALL_TABLES = '''select table_name from information_schema.tables where table_type="BASE TABLE" and table_schema="yojaka";'''

cursor.execute(QUERY_CHANGE_DB)
cursor.execute(QUERY_SELECT_ALL)
cursor.execute(QUERY_SELECT_ALL_TABLES)
for row in cursor:
    print(row)

pass
