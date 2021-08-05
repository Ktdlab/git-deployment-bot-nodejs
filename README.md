# Git pull latest repository.

This gist assumes:

* you have an online remote repository (github)
* you have a local git repo
* and a cloud server (SelfHost / DigitalOcean)

# 1 - On your server

## Install git...

## Install nodejs...

## Download script...
1. git clone https://github.com/Ktdlab/git-deployment-bot-nodejs.git
2. *After you download script replace in update.js "Username/Repo" to your name and repository3*
3. *Then in script.sh change rootdir to git local directory*

# 2 - On your origin (github)

## GitHub instructions

### Set up service hook

1. https://github.com/USERNAME/REPO/settings/hooks
1. Select the **application/json** as content type
1. Enter the URL to your deployment script - http://server.com:8080/
1. Click **Update Settings**

# Done!

Now you're ready to go.
