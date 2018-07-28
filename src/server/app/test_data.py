import pytest

from app.data.mysql import MySQL


class TestMysql():
    @pytest.fixture
    def mysql(self):
        return MySQL()

    def test_connection(self, mysql):
        assert mysql

    def test_user_table_exists(self, mysql):
        cursor = mysql.execute(mysql.QUERY_SELECT_USERS_10)
        assert cursor.rowcount > 0


class TestFirebase():
    def test_issues(self):
        assert 1 == 1
