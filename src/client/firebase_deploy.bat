npm run build
del firebase_build
rd firebase_build /s /q
cp build firebase_build -r
firebase deploy --only hosting