@echo off
cd src
cd server
pipenv run python -m pytest
exit %errorlevel%
