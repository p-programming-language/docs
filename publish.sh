gitbook install && gitbook build
git checkout main
git pull --rebase
cp -R _book/* .
git clean -fx node_modules
git clean -fx _book
git add .
git commit -a -m "Update docs"
git push main
git checkout master
