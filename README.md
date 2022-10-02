## Wild-W3-Recap

# Git/Github
------
### GitHub flow: introduction

Here is a link to the elaborate guide of Github: https://guides.github.com/activities/hello-world/
Following the series of steps defined there are crucial, because:

- Minimizes the risk of conflicts by preventing several devs from working on the same code at the same time (through the use of branches);
- Making it easier to control  the code produced by each dev, which ensures the quality of the project (through the use of pull requests ).


#### Commands Workflow
----
`$ git branch` shows all the branches

`$ git branch thirsty` creates a new branch named "thirsty"

`$ git checkout thirsty` switches to branch "thirsty". Now you are on branch "thirsty"

*after making some changes on your code in file called thirsty.html*

`$ git add hungry.html` before doing git commit (saving your changes) you need to add which files you want to commit

`$ git add .` simply adds all the files in the folder

`$ git commit -m "water"` after this command you have commited your changes to your branch thirsty but your master(main) branch is still not updated

`$ git log`  shows you the committed changes

*before merging the committed changes to your master(main) branch you need to switch to your main branch*

`$ git checkout master` now you are on your main branch

`$ git merge thirsty` merge thirsty branch into the main branch

*it will ask you to type in the commit message. if you type `:wq` it will save the commit without message and your merge will be done*

`$ git remote add origin <REMOTE_URL>`  In order to send your sources to a remote repository, you must first inform your local repository of the existence of the remote repository

`$ git remote set-url origin <REMOTE_URL>`  change origin

`$ git remote -v` check origin

`$ git push origin main`  pushes the current active branch to github. (in this case it pushes the master branch)

*If you are working on a team project you should always pull from remote first, to have the updated version on local. Then push your changes*

`$ git pull origin master`  pulls the newest version available on github




