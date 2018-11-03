from sqlalchemy import ForeignKey

from ... import db
from ...data.tables.issue import Issue
from ...data.tables.user import User


class Comment(db.Model):
    __tablename__ = 'comment'
    content = db.Column(db.Text(), server_default=None, nullable=True)

    issue = db.Column(db.Integer, ForeignKey(Issue.id),
                        server_default=None, nullable=False)

    count = db.Column(db.Integer, nullable=False, autoincrement=True)

    created_by = db.Column(db.Integer, ForeignKey(User.id),
                           server_default=None, nullable=True)

    __table_args__ = (db.UniqueConstraint('issue', 'count', name='issue_count'),)
