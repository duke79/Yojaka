from app import app

'''Run app (debug)'''
app.run(port=5000, debug=True) #TODO(PURGE_IN_PRODUCTION)

'''Run app (production)'''
# app.run(port=5000)