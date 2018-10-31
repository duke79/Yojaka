from sqlalchemy import ForeignKey
from sqlalchemy.sql import expression

from app import db
from app.data.tables.project import Project
from app.data.tables.user import User


class Issues(db.Model):
    __tablename__ = 'issues'
    project = db.Column(db.Integer, ForeignKey(Project.id),
                        default=None, nullable=True,
                        comment='in future, owner can be project instead of a user?')
    count = db.Column(db.Integer, nullable=False, default=1)
    title = db.Column(db.String(500), default=None, nullable=True)
    state = db.Column(db.String(50), default='open', nullable=False,
                      comment="'allow ''open'' & ''closed'")
    description = db.Column(db.Text(), default=None, nullable=True)
    created_by = db.Column(db.Integer, ForeignKey(User.id),
                           default=None, nullable=True)
    closed_at = db.Column(db.DateTime(), default=None, nullable=True)
    closed_by = db.Column(db.Integer, ForeignKey(User.id),
                          default=None, nullable=True)
    discussion_locked = db.Column(db.Boolean(), nullable=False, default=expression.false())

    __table_args__ = (db.UniqueConstraint('project', 'count', name='project_count'),)
