import graphene

from ..data.db import DB
from ..graph.project import Project
from ..graph.user import User
from ..data.tables.user import User as UserTable
from ..data import tables

db = DB()


class Issue(graphene.ObjectType):
    project = graphene.Field(Project)
    count = graphene.Int()
    title = graphene.String()
    state = graphene.String()
    author = graphene.Field(User)
    created_at = graphene.String()
    # updated_by = graphene.Field(User)
    updated_at = graphene.String()
    description = graphene.String()
    closed_at = graphene.String()
    closed_by = graphene.Field(User)
    discussion_locked = graphene.Boolean()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def resolve_project(self, info):
        return tables.project.Project.query.filter(tables.project.Project.id == self.project).first()

    def resolve_count(self, info):
        # issue_id = self.id
        # issue = Issues.query.filter(Issues.id == issue_id).first()
        return self.count

    def resolve_title(self, info):
        # issue_id = self.id
        # issue = Issues.query.filter(Issues.id == issue_id).first()
        return self.title

    def resolve_state(self, info):
        # issue_id = self.id
        # issue = Issues.query.filter(Issues.id == issue_id).first()
        return self.state

    def resolve_author(self, info):
        # issue_id = self.id
        # issue = Issues.query.filter(Issues.id == issue_id).first()
        user = UserTable.query.filter(UserTable.id == self.created_by).first()
        return user

    def resolve_created_at(self, info):
        return self.created_at

    # def resolve_updated_by(self, info):
    #     user = UserTable.query.filter(UserTable.id == self.updated_by).first()
    #     return user

    def resolve_updated_at(self, info):
        return self.updated_at

    def resolve_description(self, info):
        return self.description

    def resolve_closed_at(self, info):
        return self.closed_at

    def resolve_closed_by(self, info):
        user = UserTable.query.filter(UserTable.id == self.closed_by).first()
        return user

    def resolve_discussion_locked(self, info):
        if b'\x01' == self.discussion_locked:
            return True
        else:
            return False


class IssueInput(graphene.InputObjectType):
    project_id = graphene.Int(required=True)
    count = graphene.Int(description="If not provided a new issue is created, otherwise existing issue is updated")
    title = graphene.String()
    state = graphene.String(description="open/closed")
    author_id = graphene.Int(required=True, description="Who is creating/updating the issue")
    description = graphene.String()
    discussion_locked = graphene.Boolean(description="true/false")


class CreateUpdateIssue(graphene.Mutation):
    """Create or update issue"""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    class Arguments:
        issue_input = IssueInput(required=True)

    issue = graphene.Field(Issue)

    @staticmethod
    def mutate(root, info, issue_input=None):
        issue = None
        if not issue_input.count:
            issue = db.create_issue(project_id=issue_input.project_id,
                                    created_by_id=issue_input.author_id)
        else:
            issue = db.get_one_issue_by_project_and_count(project_id=issue_input.project_id,
                                                          count=issue_input.count)

        issue = db.update_issue(project_id=issue["project"],
                                count=issue["count"],
                                updated_by_id=issue_input.author_id,
                                title=issue_input.title,
                                state=issue_input.state,
                                description=issue_input.description,
                                discussion_locked=issue_input.discussion_locked)

        return CreateUpdateIssue(issue={"id": issue["id"]})
