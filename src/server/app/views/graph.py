# https://github.com/graphql-python/flask-graphql
from flask import request, jsonify
from flask_graphql import GraphQLView
from app.data import db
from app.graph import schema
from app import app


def graph_view():
    session = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImZmNTRmZjM0MTFiZmMwMDJiYTBjZDAwNzA2YmEzYmM4NTBiZWIwMmIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdmlsb2thbmxhYnMtZTg4NDciLCJuYW1lIjoiUHVsa2l0IFNpbmdoIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8tX2FjUXhjMGJ6TmMvQUFBQUFBQUFBQUkvQUFBQUFBQUFLYlUvTVNYbHZVSUJyX0UvcGhvdG8uanBnIiwiYXVkIjoidmlsb2thbmxhYnMtZTg4NDciLCJhdXRoX3RpbWUiOjE1MzMzNjc1MjIsInVzZXJfaWQiOiJOZnlpczBzT2dDZVlDczU4VDFpZ3gwYjk5ZmYyIiwic3ViIjoiTmZ5aXMwc09nQ2VZQ3M1OFQxaWd4MGI5OWZmMiIsImlhdCI6MTUzMzg4OTY5MCwiZXhwIjoxNTMzODkzMjkwLCJlbWFpbCI6InB1bGtpdHNpbmdoMDFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsidHdpdHRlci5jb20iOlsiNzkxMjkyNDEiXSwiZ29vZ2xlLmNvbSI6WyIxMTcxMzY1OTI1OTk3MTMwODE3NDgiXSwiZW1haWwiOlsicHVsa2l0c2luZ2gwMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.IRlfgERyZnLqRxYmc6-3bA9ZG428IUj7rWSL_mcbtJS3InIkY29t--ZzJOS7QyB21OghZyvLF1Xg0mT0IrtRsNEndjE2178YF0cqtZqy0MvbeVXvUqmrjosnyT9VxG6ppfsgcUnZ_U5XBSyYQChdd4Sdb2WAcGV86FOUjkFkXQoCRWfruS0avAdCPp76B-JrpsXiwUR1MjvfTvidqUTsgPw3gJyeg7-euLQGYY0VQ2B3I5rT-f5YOdjl6drUJPttO5XnMjO-BADvx4C5g12i_VppZ9YNFqLG0wcUR2jIE39L9eZjApTLyyMkH3_tdMeuR-NKUXhkaClwEOb8FcV16g"#db.init_session(request.form["session_id"])
    if session:
        view = GraphQLView.as_view('graph', schema=schema, graphiql=True)
        return view()
    else:
        return jsonify("Invalid session"), 400


app.add_url_rule('/graph', view_func=graph_view, methods=["POST"])

# Optional, for adding batch query support (used in Apollo-Client)
# app.add_url_rule('/graphql/batch', view_func=GraphQLView.as_view('graphql', schema=schema, batch=True))
