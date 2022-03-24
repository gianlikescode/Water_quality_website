# How to deploy app to digital ocean

1. Make changes.
2. Save changes.
3. Add changes to stage with `git add .`
4. Commit changes with `git commit -m "some message"`
5. Push changes to github with `git push origin master` or `git push`
    1. Optionally verify if changes appear in github.
    2. Go to github repo and click on commits tab.
    3. Check if the latest commit appears there.
6. Deploy application in digital ocean:
    1. Go to apps 
    2. Hit Actions button in top-right corner.
    3. Hit deploy.
    4. Wait for new application domain to appear once the build finishes.