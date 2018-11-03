from ... import db

from ...data.tables.user import User


class Project(db.Model):
    __tablename__ = 'project'
    name = db.Column(db.String(200), nullable=True)
    owner = db.Column(db.Integer, db.ForeignKey(User.id),
                      server_default=None, nullable=True)
    issue_counter = db.Column(db.Integer, server_default="0", nullable=False)
