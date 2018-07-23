import sys

import pymysql

password = sys.argv[1]
conn = pymysql.connect(host='localhost',
                       user='vilokanlabs',
                       password=password)

cursor = conn.cursor()
QUERY_CREATE_USER = "create user 'vilokanlabs'@'localhost' identified by '%s';" % (password)
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
