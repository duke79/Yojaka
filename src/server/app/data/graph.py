# http://graphql.github.io/learn/queries/

import graphene


def get_users(prefix=""):
    return [
        {
            "name": "Brad",
            "email": "who@me.com"
        },
        # {
        #     "name": "Dom",
        #     "email": "bom@de.com"
        # },
        {
            "name": "Brown",
            "email": "fox@le.com"
        }
    ]


class User(graphene.ObjectType):
    name = graphene.String()
    email = graphene.String()

    def resolve_name(self, info):
        return self["name"]

    def resolve_email(self, info):
        return self["email"]


class Users(graphene.ObjectType):
    users = graphene.List(User, prefix=graphene.String())

    def resolve_users(self, info, prefix):
        return get_users(prefix)


schema = graphene.Schema(query=Users)

query = '''
    query SummonTheHeroes($prefix: String = "Bra") {
        heroes: users(prefix: $prefix){
            __typename
            ...userNameFra
        }
    }
    
    fragment userNameFra on User{
            name
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
pass
