import firebase_admin
from firebase_admin import credentials, db, auth

''' Initialize firebase '''
# serviceAccountKey to be generated from firebase -> Project Settings -> Service Accounts
# -> Generate new private key
cred = credentials.Certificate('D:\Dev\Repo\Yojaka\out_of_git\serviceAccountKey.json')
default_app = firebase_admin.initialize_app(cred, {
    "databaseURL": "https://vilokanlabs-e8847.firebaseio.com"
})

''' Access database '''
root = db.reference()
issues = root.child("Yojaka/duke79/Issues")
issues = issues.get()
for issue in issues:
    print(issues[issue])

''' Login and access user '''
users = auth.list_users()
for user in users.users:
    print(user.uid)
    print(user.email)

def verifyIdToken(id_token):
    decoded_token = auth.verify_id_token(id_token)
    return decoded_token