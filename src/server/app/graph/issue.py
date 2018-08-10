import graphene
from app.data import db
from app.graph.user import User


class Issue(graphene.ObjectType):
    project = graphene.String()
    count = graphene.Int()
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

    def resolve_count(self, info):
        issue_id = self["id"]
        issue = db.get_issue_by_id(issue_id)
        return issue["count"]

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
    project_id = graphene.Int(required=True)
    count = graphene.Int()
    title = graphene.String()
    state = graphene.String()
    author_id = graphene.Int()
    created_at = graphene.String()
    updated_at = graphene.String()
    description = graphene.String()
    closed_at = graphene.String()
    closed_by_id = graphene.Int()
    discussion_locked = graphene.Boolean()


class CreateUpdateIssue(graphene.Mutation):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    class Arguments:
        issue_input = IssueInput(required=True)

    issue = graphene.Field(Issue)

    @staticmethod
    def mutate(root, info, issue_input=None):
        if not issue_input.count:
            issue = db.create_new_issue(project_id=issue_input.project_id, created_by_id=issue_input.author_id,
                                        title=issue_input.title, description=issue_input.description)
        issue = Issue(
            project=issue_input.project_id,
            count=issue_input.count,
            title=issue_input.title,
            state=graphene.String(),
            author=issue_input.author_id,
            created_at=issue_input.created_at,
            updated_at=issue_input.updated_at,
            description=issue_input.description,
            closed_at=issue_input.closed_at,
            closed_by=issue_input.closed_by_id,
            discussion_locked=issue_input.discussion_locked
        )
        return {"id": 1}
