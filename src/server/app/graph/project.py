import graphene

from app.graph.user import User
from app.data import tables


class Project(graphene.ObjectType):
    name = graphene.String()
    owner = graphene.Field(User)

    def resolve_name(self, info):
        return self.name

    def resolve_owner(self, info):
        return tables.user.User.query.filter(tables.user.User.id == self.owner).first()
