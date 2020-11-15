# ⚒️ Setup Environment and Tools

[![License Apache2](https://img.shields.io/hexpm/l/plug.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Actions Status](https://github.com/DataStax-Academy/battlestax/workflows/BattleStax%20Tests/badge.svg)](https://github.com/DataStax-Academy/battlestax/actions) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/e265340f-c6a6-4d7b-b24c-438b87c67876/deploy-status)](https://app.netlify.com/sites/battlestax-tutorial/deploys)

[🏠 <--Back to Main Page](./README.md#table-of-contents)

This is arguably the biggest step in the whole workshop. Once you get your tools and environment setup you'll be good to go, not just for this workshop, but for your own **JAMStack** applications moving forward. Just repeat the process for your own application repositories.

![Template CTRL click](./tutorial/tools.png?raw=true)

## 🗓️ Table of Contents

1. [Setup your BattleStax `github` repository](#1-create-your-battlestax-repository)
2. [Setup your `Astra` instance (database)](#2-create-your-astra-instance)
3. [Setup your `Netlify` account](#3-setup-netlify-account)
4. [Setup CI/CD between github and Netlify](#4-setup-for-production-cicd)
5. [Setup your cloud-based `GITPOD` development environment](#5-setup-your-cloud-based-gitpod-development-environment)
6. [Setup your `LOCAL` development environment](##6-setup-your-local-development-environment)


## 1. Create your `BattleStax` repository

*The very first thing we want to do is create a copy of the BattleStax repository into **YOUR** GitHub account. This is important because as part of this workshop you will deploy the BattleStax application to production and will need your own repository to do so. The good thing is we've made this easy for you by creating a template you can use to quickly copy the repo.*

|**✅ Step 1a: Launch the BattleStax repo into another tab**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>This might seem like an odd step, but will allow you to keep your place in the instructions you are reading now until you move to the new repo. Scroll up on the **GitHub** repo page, **_Right-Click_** on the **`battlestax`** repo name, and choose **`Open Link in New Tab`** to launch it in a new tab:<br/><br/>![Template CTRL click](./tutorial/template-ctrl-click.png?raw=true)</details>|


|**✅ Step 1b. Create repository from the provided template**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>✔ From the new tab you just launched, click on the **`Use this template`** button up on the top right of the toolbar.<br/><br/>![Template CTRL click](./tutorial/template-click-use-template.png?raw=true)<br/><br/>✔ On the **Create a new repository from battlestax** page you are presented with, fill out the **`Repository name`** field with `battlestax`, choose **`Public`** (_this should be default_), and finally click the **`Create repository from template`** button at the bottom of the page.<br/><br/>![Template create repo](./tutorial/template-create-repo.png?raw=true)<br/>It should only take a moment for **GitHub** to generate a new repository in your account.</details>|

|**✅ Step 1c. Navigate back to your place in the docs**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>Once completed you will land in the root of your new repository.<br/><br/>![Template nav back to step0](./tutorial/template-nav-back-to-step0.png?raw=true)<br/>From there, navigate back to your place in the ocumentation and continue on [with creating your **Astra** instance.](README_step00.md#2-copy-the-battlestax-repository)<br><br/>![Template nav to create astra](./tutorial/template-nav-to-create-astra.png?raw=true)</details>|

### [🔝](#%EF%B8%8F-table-of-contents)

## 2. Create your Astra instance

`ASTRA` service is available at url [https://astra.datastax.com](https://dtsx.io/workshop). `ASTRA` is the simplest way to run Cassandra with zero operations at all - just push the button and get your cluster. `Astra` offers **5 Gb Tier Free Forever** and you **don't need a credit card** or anything to sign-up and use it. 

|**✅ Step 2a. Register (if needed) and Sign In to Astra** :<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>You can use your `Github`, `Google` accounts or register with an `email`.<br/>Make sure to chose a password with minimum 8 characters, containing upper and lowercase letters, at least one number and special character<br/><br/>- [Registration Page](https://dtsx.io/workshop)<br/>![Registration Image](https://github.com/datastaxdevs/shared-assets/blob/master/astra/login-1000.png?raw=true)<br/><br/>- [Authentication Page](https://dtsx.io/workshop)<br/>![Login Image](https://github.com/datastaxdevs/shared-assets/blob/master/astra/signin-raw.png?raw=true)<br/></details>|

|**✅ Step 2b. Choose the free plan and select your region**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/choose-a-plan-1000-annotated.png?raw=true)<br/>- **Select the free tier**: 5GB storage, no obligation<br/>- **Select the region**: This is the region where your database will reside physically (choose one close to you or your users). For people in EMEA please use `europe-west-1` idea here is to reduce latency.<br/></details>|

|**✅ Step 2c. Configure and create your database**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>You will find below which values to enter for each field.<br/><br/>![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/create-and-configure-annotated-1000.png?raw=true)<br/>- **Fill in the database name** - `battlestax_db.` While Astra allows you to fill in these fields with values of your own choosing, please follow our reccomendations to make the rest of the exercises easier to follow. If you don't, you are on your own! :)<br/>- **Fill in the keyspace name** - `battlestax`. It's really important that you use the name sa_index here in order for all the exercises to work well. We realize you want to be creative, but please just roll with this one today.<br/>- **Fill in the Database User name** - `battle_user`. Note the user name is case-sensitive. Please use the case we suggest here.<br/>- **Fill in the password** - `battle_password1`. Fill in both the password and the confirmation fields. Note that the password is also case-sensitive. Please use the case we suggest here.<br/>- **Create the database**. Review all the fields to make sure they are as shown, and click the **`Create Database`** button.<br/><br/>You will see your new database `Pending` in the Dashboard.<br/>![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/dashboard-pending-1000.png?raw=true)<br/><br/>The status will change to `Active` when the database is ready, this will only take 2-3 minutes. You will also receive an email when it is ready.<br/></details>|

### [🔝](#%EF%B8%8F-table-of-contents)

## 3. Setup Netlify account

|**✅ Step 3a. Setup a Netlify account**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br />- Using the link [HERE](https://www.netlify.com), sign up for a new account and follow **Netlify's** instructions to create a **`New Site from Git`** (_you must be logged in to see this option_).<br /><br />![Netlify Setup Example](./tutorial/netlify-signin.png?raw=true)<br />- Once signin ,you should land on the following page.<br /><br />![Netlify Setup Example](./tutorial/netlify-empty.png?raw=true)<br /></details>|

|**✅ Step 3b. Create a new site**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>Move to the `Sites` tab and Click the `New site from git` button.<br/>![Netlify Setup Example](./tutorial/netlify-createsite-1.png?raw=true)<br/><br/>On the new page select `Github` and locate the proper repository in your github Account.<br/>![Netlify Setup Example](./tutorial/netlify-createsite-2.png?raw=true)<br/><br/>After allowing the application `Netlify` on Github select the `BattleStax` <br/>![Netlify Setup Example](./tutorial/netlify-createsite-3.png?raw=true)<br/><br/>Use all of the defaults for `Basic Build Settings`<br/>![Netlify Setup Example](./tutorial/netlify-createsite-4.png?raw=true)<br/><br/>Click `Show advanced` to enter the following variables:<br/><br/> 🟢 `ASTRA_DB_USERNAME` as `battle_user` *(The user name we defined when creation the Astra instance)*<br/><br/>🟢 `ASTRA_DB_PASSWORD` as `battle_password1` *(The password we defined when creation the Astra instance)*<br/><br/> 🟢 `ASTRA_DB_KEYSPACE` as `battlestax` *(The keyspace we defined when creation the Astra instance)*<br/><br/>🟢 `ASTRA_DB_ID` as the cluster ID of your Astra DB. To get your database ID and region go the ASTRA summary page. Locate the cluster ID and copy it by clicking the clickboard icon as showed below. <br/>![Netlify Setup Example](./tutorial/netlify-createsite-5.png?raw=true)<br/><br/>🟢 `ASTRA_DB_REGION` as the region you picked when creating the DB., It should be either `us-east-1` or `europe-west1`<br/<br/><br/>🟢 `GAMES_COLLECTION` as `games` this is the collection where we will store all values.<br/><br/>You should now have something like<br/>![Netlify Setup Example](./tutorial/netlify-createsite-6.png?raw=true)<br/></details>|

|**✅ Step 3c. Deploy your site**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>Click **`Deploy Site`** and once deployed copy the domain name of your new site from **Netlify**.<br/>![Netlify URL Example](https://raw.githubusercontent.com/kidrecursive/battlestax-tutorial/step-1/tutorial/netlify_url.png)<br/><br/>Finally, wait for deployment!<br/>![Netlify Setup Example](./tutorial/netlify-createsite-7.png?raw=true)<br/><br/>When your new site is ready, you will be able to go to: `<your_url>.netlify.app` to see your game.<br/>![Netlify Setup Example](./tutorial/netlify-createsite-8.png?raw=true)<br/><br/>If you start new games it will create a new record in the database. If you want to validate this behavirour click on `START NEW GAME`<br/><br/>Open Astra UI, show the CQLCONSOLE and execute the following command (here *battlestax* is your keyspace and *games* your collection name - if you chose another names adapt the query accordingly).<br/><br/>📘 **Commands to execute**<br/>`select key,text_value from battlestax.games;`<br/><br/>You should have a result that looks like <br/>![Netlify Setup Example](./tutorial/netlify-createsite-9.png?raw=true)|

### [🔝](#%EF%B8%8F-table-of-contents)


## 4. Setup for Production CI/CD

Every application should have a CI/CD *(**C**ontinous **I**ntegration, **C**ontinuous **D**eployment)* pipeline. This allows for quick iteration of changes to production deployment by taking advantage of automation and tests to ensure everything is working properly. 

After each commit a workshow is initialized to BUILD your project, EXECUTE tests and DEPLOY to netlify.  The good thing is many CI/CD tools are provided right within **GitHub**. Adding this capabiity just takes a couple steps.

|**✅ Step 4a. Add secret variables**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>🖱️ Click me to show details</i></summary><br/>Remember those variables when we configured **Netlify**? We need to add these same to our **GitHub** repository.<br/><br/>Within **YOUR** Battlestax repository click on **`Settings`** in the top toolbar, choose **`Secrets`** from the menu on the left, and finally click the **`New secret`** button on the top right of the page. Add a secret for each of the variables we used earlier.<br/><br/>You notice that those are the same as used by netlify. Github will populate them at deploy time.<br/>`ASTRA_DB_USERNAME=battle_user`<br/>`ASTRA_DB_PASSWORD=battle_password1`<br/>`ASTRA_DB_KEYSPACE=battlestax`<br/>`ASTRA_DB_ID=[check Step3b]`<br/>`ASTRA_DB_REGION=[check Step3b]`<br/>`GAMES_COLLECTION=games`<br/><br/>*That should look like:*<br/>![Netlify Setup Example](./tutorial/setup-github-1.png?raw=true)<br/></details>|


|**✅ Step 4b. Test out an application build**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔ Using `git`, create a new branch and issue an empty commit, then push it to your repository.<br/><br/>📘 **Commands to execute**<br/>`git checkout -b test_pr`<br/>`git commit --allow-empty -m "New branch to test ci/cd"`<br/>`git push origin test_pr`<br/><br/>✔️ Using `Github UI`, merge your new branch to the master through a pull request.<br/><br/>Select your new branch in github<br/>![Netlify Setup Example](./tutorial/setup-github-2.png?raw=true)<br/><br/>Open a PR but click and `Compare & Pull request` button. for `test_pr` into `master`.<br/>![Netlify Setup Example](./tutorial/setup-github-3.png?raw=true)<br/><br/>Caution don't target the original master from DataStax-Academy but **YOUR** master![Netlify Setup Example](./tutorial/setup-github-4.png?raw=true)<br/><br/>Provide a comment and click `Create Pull Request`<br/>![Netlify Setup Example](./tutorial/setup-github-5.png?raw=true)<br/><br/>Your Pull request is now ready, let's merge it![Netlify Setup Example](./tutorial/setup-github-6.png?raw=true)<br/><br/>Click on `Merge Pull Request`<br/>![Netlify Setup Example](./tutorial/setup-github-7.png?raw=true)<br/><br/>Click on `Confirm Merge`<br/>![Netlify Setup Example](./tutorial/setup-github-8.png?raw=true)<br/><br/>Congratulations you are done here is what it look like <br/>![Netlify Setup Example](./tutorial/setup-github-9.png?raw=true)</p><br/>✔️ Browsing `Netlify`, see the ci/cd process rolling wuth tests deployment<br/>![Netlify Setup Example](./tutorial/setup-github-10.png?raw=true)<br/>You have access to lofs<br/>![Netlify Setup Example](./tutorial/setup-github-11.png?raw=true)<br/> Notice how the status moved from `deploying` to `published`</details>|

### [🔝](#%EF%B8%8F-table-of-contents)

## 5. Setup your cloud-based GITPOD development environment

*To code during the workshop you can either use **your laptop** or a **Cloud-based IDE** named [Gitpod](gitpod.io) with everything installed. Here we explain the Gitpod way.*

|**✅ Step 5a: Launch gitpod**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/> ✔ Gitpod is a cloud based IDE based on Eclipse Theia very similar to VSCode. You need to authenticate with your github account but then gipod will initialized you workspace, building the solution.To initialize your environment click on the button below (CTRL + Click to open in new tab)<br/>[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)<br/><br/>Target url are dynamic and looks like `https://<your_uid>.<your_region>.gitpod.io/#/workspace/battlestax`<br/>![Netlify Setup Example](./tutorial/gitpod-welcome.png?raw=true)</details>|


|**✅ Step 5b. Define environment variables**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔  Copy and paste the contents of the `.env.template` file into an `.env` file:<br/>`cat .env.example > .env`<br/><br/>✔ The `.env` file allows us to customize our own environmental variables. We set our Astra credential to env variable, which are outside of our program. Fill in the `.env` file variables with the Astra variables you made a copy of earlier:<br/>`ASTRA_DB_USERNAME=battle_user`<br/>`ASTRA_DB_PASSWORD=battle_password1`<br/>`ASTRA_DB_KEYSPACE=battlestax`<br/>`ASTRA_DB_ID=[cf bloc 3b]`<br/>`ASTRA_DB_REGION=[cf bloc 3b]`<br/>`GAMES_COLLECTION=games`<br/><br/>![Netlify Setup Example](./tutorial/gitpod-env.png?raw=true)</details>|


|**✅ Step 5c. Run the Tests**<br/>![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔ At initialization gitpod has download dependencies already (you should have the `node_modules` folder already there. Still, check dependencies are installed with :<br/>`npm install`<br/><br/>✔ Run the provided test on the master branch. The behavior of `npm test` is also specified in the `package.json` file.<br/>`npm test`<br/><br/>![Netlify Setup Example](./tutorial/gitpod-test.png?raw=true)</details>|


|**✅ Step 5d. Start the application**![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔ Start the application<br/>```npm start```<br/><br/>✔  Hit the loading screen<br/>`https://3000-<your_uid>.<your_region>.gitpod.io/#/workspace/battlestax`![Netlify Setup Example](./tutorial/gitpod-start.png?raw=true)<br/><br/>**Done!** You have successfully set up your app, run your tests locally, and started BattleStax.</details>|

### [🔝](#%EF%B8%8F-table-of-contents)

## 6. Setup your LOCAL development environment

*To code during the workshop you can either use **your laptop** or a **Cloud-based IDE** named Gitpod. Here we explain how to work locally.*

```diff
+ Information : We assume people working locally are not beginners
+ They should be autonomous to install a development environment.
```

Here is the list of tools you need:
- [NodeJS 12.x+](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- An IDE like [Visual Studio Code](https://code.visualstudio.com/Download) or [Jetbrain WebStorm](https://www.jetbrains.com/webstorm/download/#section=mac) or [Atom](https://atom.io/)


|**✅ Step 6a. Clone the repository**![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/> ✔  Clone **_your_** `BattleStax` repository to localhost, use the following command in your terminal to do so:<br/>`git clone git@github.com:[your_github_id]/battlestax.git`<br/><br/>✔  Move to the proper directory<br/>`cd battlestax`<br/></details>|

|**✅ Step 6b. Define environment variables**![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔  Copy and paste the contents of the `.env.template` file into an `.env` file:<br/>`cp .env.template .env`<br/><br/>✔ The `.env` file allows us to customize our own environmental variables. We set our Astra credential to env variable, which are outside of our program. Fill in the `.env` file variables with the Astra variables you made a copy of earlier:<br/>`ASTRA_DB_USERNAME=battle_user`<br/>`ASTRA_DB_PASSWORD=battle_password1`<br/>`ASTRA_DB_KEYSPACE=battlestax`<br/>`ASTRA_DB_ID=[cf bloc 3b]`<br/>`ASTRA_DB_REGION=[cf bloc 3b]`<br/>`GAMES_COLLECTION=games`</details>|

|**✅ Step 6d. Run the Tests**![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔ Install Battlestax Dependencies. These are specified in the `package.json` file.<br/>`npm install`<br/><br/>✔ Run the provided test on the master branch. The behavior of `npm test` is also specified in the package.json file.<br/><br/>`npm test`<br/>![Netlify Setup Example](./tutorial/local-test.png?raw=true)</details>|

|**✅ Step 6e. Start the application**![.](./tutorial/line.png?raw=true)|
|:---|
||
|<details><summary><i>Click to view the solution</i></summary><br/>✔  Start the application<br/>`npm start`<br/><br/>✔ Hit the loading screen<br/>`http://localhost:3000/`<br/>![Netlify Setup Example](./tutorial/start-localhost.png?raw=true)<br/><br/>**Done!** You have successfully set up your app, run your tests locally, and started BattleStax.<br/><br/>![Netlify Setup Example](./tutorial/well-done.png?raw=true)</details>|

[==> Next section: **Create a REST API**](./README_step01.md)