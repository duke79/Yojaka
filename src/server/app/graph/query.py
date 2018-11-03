# http://graphql.github.io/learn/queries/
# Avoid select * | Use IDs, let the child resolve its fields |
# https://weblogs.asp.net/jongalloway/the-real-reason-select-queries-are-bad-index-coverage

import graphene

from ..data.db import DB
from ..data.permissions import UserPermission
from ..graph.issue import Issue, CreateUpdateIssue
from ..graph.project import Project
from ..data import tables
from ..graph.user import User

db = DB()


class Query(graphene.ObjectType):
    users = graphene.List(User, prefix=graphene.String())
    issues = graphene.List(Issue, project_id=graphene.Int())
    projects = graphene.List(Project)

    def resolve_users(self, info, prefix=""):
        if db.check_permission(UserPermission.ALL.value):  # 1 = all
            return tables.user.User.query.filter().all()

    def resolve_issues(self, info, project_id=1):
        if db.check_permission(UserPermission.ALL.value):
            issues = tables.issue.Issue.query.filter(tables.issue.Issue.project == project_id).all()
            return issues

    def resolve_projects(self, info):
        return tables.project.Project.query.all()


class Mutations(graphene.ObjectType):
    create_update_issue = CreateUpdateIssue.Field()


schema = graphene.Schema(query=Query, mutation=Mutations)

if __name__ == "__main__":
    query = '''
        query SummonTheHeroes($prefix: String = "Bra") {
            heroes: users(prefix: $prefix){
                __typename
                ...userNameFra
            }
        }
    
        fragment userNameFra on User{
                name
                email
            }     
    '''

    result = schema.execute(query)
    print(result.data)

    iQuery = '''
        {
            __schema {
                types {
                    name
                }
            }
        }
    '''
    result = schema.execute(iQuery)
    print(result.data)
