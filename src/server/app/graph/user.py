import graphene

from app.data.tables import user
from app.data.db import DB

db = DB()


class User(graphene.ObjectType):
    """User class for graph"""
    name = graphene.String()
    email = graphene.String()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def resolve_name(self, info):
        return self.name

    def resolve_email(self, info):
        return self.email
