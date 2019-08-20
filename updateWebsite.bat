set message=%1

git add -A
git commit -m %message%
git push -u origin master