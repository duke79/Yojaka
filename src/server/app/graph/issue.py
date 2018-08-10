import graphene
from app.data import db
from app.graph.user import User


class Issue(graphene.ObjectType):
    project = graphene.String()
    counter = graphene.Int()
    title = graphene.String()
    state = graphene.String()
    author = graphene.Field(User)
    created_at = graphene.String()
    updated_at = graphene.String()
    description = graphene.String()
    closed_at = graphene.String()
    closed_by = graphene.Field(User)
    discussion_locked = graphene.Boolean()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def resolve_project(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["project"]

    def resolve_counter(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["counter"]

    def resolve_title(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["title"]

    def resolve_state(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["state"]

    def resolve_author(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["created_by_id"]

    def resolve_created_at(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["created_at_id"]

    def resolve_updated_at(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["updated_at"]

    def resolve_description(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["description"]

    def resolve_closed_at(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["closed_at"]

    def resolve_closed_by(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["closed_by_id"]

    def resolve_discussion_locked(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["discussion_locked"]

class IssueInput(graphene.InputObjectType):
    project = graphene.String(required=True)
    counter = graphene.Int()
    title = graphene.String()
    state = graphene.String()
    author = graphene.Field(User)
    created_at = graphene.String()
    updated_at = graphene.String()
    description = graphene.String()
    closed_at = graphene.String()
    closed_by = graphene.Field(User)
    discussion_locked = graphene.Boolean()

class CreateUpdateIssue(graphene.Mutation):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    class Arguments:
        issue_input = IssueInput(required=True)

    def resolve_title(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["title"]

    def resolve_state(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["state"]

    def resolve_author(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["created_by_id"]

    def resolve_created_at(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["created_at_id"]

    def resolve_updated_at(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["updated_at"]

    def resolve_description(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["description"]

    def resolve_closed_at(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["closed_at"]

    def resolve_closed_by(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["closed_by_id"]

    def resolve_discussion_locked(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["discussion_locked"]
