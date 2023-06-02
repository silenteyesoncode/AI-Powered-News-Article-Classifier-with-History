# To contribute to this repository, follow the steps below:

## Step 1: Fork this repository

●Click the "Fork" button at the top right corner of this repository's page.

![Alt text](../../Users/Lenovo/Documents/fork.png)

## Step 2:Clone the forked repository

●Go to your GitHub account and open the forked repository.
●Click the "Code" button and then the copy icon to copy the repository's URL.

![Alt text](../../Users/Lenovo/Documents/code.png)

●Open a terminal and run the following command:
git clone "url you just copied"

![Alt text](../../Users/Lenovo/Documents/copy.png)

The command will look something like this :
git clone https://github.com/{your github user name}/AI-Powered-News-Article-Classifier-with-History.git

## Step 3:Navigate to the Repository

●Open the terminal and change your directory to the cloned repository.

cd AI-Powered-News-Article-Classifier-with-History/

## Step 4:Add Upstream Link and Keep Your Repo Updated

●Add an upstream link to the main branch in your cloned repo.

git remote add upstream https://github.com/silenteyesoncode/AI-Powered-News-Article-Classifier-with-History

●Keep your cloned repo up to date by pulling from upstream (as this will avoid any merge conflicts while committing new changes)

git pull upstream (main or master)

## Step 5:Create a Feature Branch

●Create a new branch to work on your feature:(This is a necessary step).

git checkout -b <feature-name>

## Step 6: Make and Stage Your Changes

●Make the necessary changes to the code.
●Stage your changes by adding them to the staging area:
git add .

## Step 7: Commit the changes

●Now commit those changes using the git commit command:

git commit -m "Write a commit message"

## Step 8: Push your code.

●Now push your changes to your forked repository on GitHub :
git push -u origin your-branch-name

## Step 9:Create a Pull Request

●Go to the original repository on GitHub.
●Click on the "Pull Requests" tab.
●Click the "New Pull Request" button.
●Write a meaningful pull request message to explain your contribution and why you made the changes.

Note: It's important to provide clear and concise instructions while also using proper formatting to enhance readability.
