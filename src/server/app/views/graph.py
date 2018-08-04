# https://github.com/graphql-python/flask-graphql

from flask_graphql import GraphQLView
from app.graph import schema

from app import app

app.add_url_rule('/graph', view_func=GraphQLView.as_view('graph', schema=schema, graphiql=True))

# Optional, for adding batch query support (used in Apollo-Client)
# app.add_url_rule('/graphql/batch', view_func=GraphQLView.as_view('graphql', schema=schema, batch=True))
