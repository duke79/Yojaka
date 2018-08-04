cd src\client
call npm run build
call del firebase_build
call rd firebase_build /s /q
call xcopy build firebase_build /s /e
call npm install firebase firebase-tools --global
call firebase deploy --only hosting