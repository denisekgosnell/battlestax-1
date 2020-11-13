# 00. Setup environment and tools

[![License Apache2](https://img.shields.io/hexpm/l/plug.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Discord](https://img.shields.io/discord/685554030159593522)](https://discord.com/widget?id=685554030159593522&theme=dark)
[![Actions Status](https://github.com/DataStax-Academy/battlestax/workflows/BattleStax%20Tests/badge.svg)](https://github.com/DataStax-Academy/battlestax/actions) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/e265340f-c6a6-4d7b-b24c-438b87c67876/deploy-status)](https://app.netlify.com/sites/battlestax-tutorial/deploys)

[🏠 <--Back to Table of Contents](./README.md#table-of-contents)

This is arguably the biggest step in the whole workshop. Once you get your tools and environment setup you'll be good to go, not just for this workshop, but for your own **JAMStack** applications moving forward. Just repeat the process for your own application repositories.

## Table of Contents

[1. In github, create your BattleStax repository from template](1-create-your-battlestax-repository)

[2. Create your Astra instance](#2-copy-the-battlestax-repository)

[3. Create a Netlify account and deploy a site](#3-setup-netlify-account)

[4. Setup CI/CD between github and Netlify](4-setup-for-production-cicd)

[5. Setup your development environment](#5-configure-your-ide)


## 1. Create your `BattleStax` repository

The very first thing we want to do is create a copy of the BattleStax repository into **YOUR** GitHub account. 

This is important because as part of this workshop you will deploy the BattleStax application to production and will need your own repository to do so. The good thing is we've made this easy for you by creating a template you can use to quickly copy the repo.

**✅ Step 1a. Launch the BattleStax repo into another tab**

This might seem like an odd step, but will allow you to keep your place in the instructions you are reading now until you move to the new repo.

Just scroll up on the **GitHub** repo page, **_Right-Click_** on the **`battlestax`** repo name, and choose **`Open Link in New Tab`** to launch it in a new tab.

> ![Template CTRL click](./tutorial/template-ctrl-click.png?raw=true)

**✅ Step 1b. Create repository from the provided template**
From the new tab you just launched, click on the **`Use this template`** button up on the top right of the toolbar.

> ![Template CTRL click](./tutorial/template-click-use-template.png?raw=true)

Then, on the **Create a new repository from battlestax** page you are presented with, fill out the **`Repository name`** field with `battlestax`, choose **`Public`** (_this should be default_), and finally click the **`Create repository from template`** button at the bottom of the page.

> ![Template create repo](./tutorial/template-create-repo.png?raw=true)

It should only take a moment for **GitHub** to generate a new repository in your account.

**✅ Step 1c. Navigate back to your place in the docs**

Once completed you will land in the root of your new repository. From there, navigate back to your place in the in the documentation and continue on [with creating your **Astra** instance.](README_step00.md#2-copy-the-battlestax-repository)

> ![Template nav back to step0](./tutorial/template-nav-back-to-step0.png?raw=true)

> ![Template nav to create astra](./tutorial/template-nav-to-create-astra.png?raw=true)

[🏠 <--Back to the top](#table-of-contents)

## 2. Create your Astra instance

`ASTRA` service is available at url [https://astra.datastax.com](https://dtsx.io/workshop). `ASTRA` is the simplest way to run Cassandra with zero operations at all - just push the button and get your cluster. `Astra` offers **5 Gb Tier Free Forever** and you **don't need a credit card** or anything to sign-up and use it. 

**✅ Step 2a. Register (if needed) and Sign In to Astra** : You can use your `Github`, `Google` accounts or register with an `email`.

Make sure to chose a password with minimum 8 characters, containing upper and lowercase letters, at least one number and special character

- [Registration Page](https://dtsx.io/workshop)

![Registration Image](https://github.com/datastaxdevs/shared-assets/blob/master/astra/login-1000.png?raw=true)

- [Authentication Page](https://dtsx.io/workshop)

![Login Image](https://github.com/datastaxdevs/shared-assets/blob/master/astra/signin-raw.png?raw=true)


**✅ Step 2b. Choose the free plan and select your region**

![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/choose-a-plan-1000-annotated.png?raw=true)

- **Select the free tier**: 5GB storage, no obligation

- **Select the region**: This is the region where your database will reside physically (choose one close to you or your users). For people in EMEA please use `europe-west-1` idea here is to reduce latency.

**✅ Step 2c. Configure and create your database**

You will find below which values to enter for each field.

![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/create-and-configure-annotated-1000.png?raw=true)

- **Fill in the database name** - `battlestax_db.` While Astra allows you to fill in these fields with values of your own choosing, please follow our reccomendations to make the rest of the exercises easier to follow. If you don't, you are on your own! :)

- **Fill in the keyspace name** - `battlestax`. It's really important that you use the name sa_index here in order for all the exercises to work well. We realize you want to be creative, but please just roll with this one today.

- **Fill in the Database User name** - `battle_user`. Note the user name is case-sensitive. Please use the case we suggest here.

- **Fill in the password** - `battle_password1`. Fill in both the password and the confirmation fields. Note that the password is also case-sensitive. Please use the case we suggest here.

- **Create the database**. Review all the fields to make sure they are as shown, and click the **`Create Database`** button.

You will see your new database `Pending` in the Dashboard.

![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/dashboard-pending-1000.png?raw=true)

The status will change to `Active` when the database is ready, this will only take 2-3 minutes. You will also receive an email when it is ready.

**✅ Step 2d. Create a service account**

The last thing to do with **Astra** is create a service account. You will use this later to quickly connect your application to the database as a back-end store.

Scroll down to the bottom of the page to locate **`Service Account`** in `Security Settings`.

![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/organization-home-1000.png?raw=true)

Create a service account by clicking **`Add Service Account`** button above the section as shown below.

![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/security-settings-annotated.png?raw=true)

When the panel opens on the right, click **`Add`**. 

![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/security-add-org-annotated.png?raw=true)

**✅ Step 2e. Copy credentials to your clipboard**

Click the ellipsis at end of Service Account row to open menu as select **`Copy Credentials`**

![my-pic](https://github.com/datastaxdevs/shared-assets/blob/master/astra/organization-copycredentials-1000.png?raw=true)

The credentials you copied to the clipboard look like the following JSON, we will use it in gitpod to enable connectivity.

```json
{
  "clientId":"149de2c7-9b07-41b3-91ad-9453dee4dc54",
  "clientName":"cedrick.lunven@datastax.com",
  "clientSecret":"aaaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"
}
```

_Note: You can always comes back to the Astra UI later and copy your service account credentials at any time._

[🏠 <--Back to the top](#table-of-contents)

## 3. Setup Netlify account

**✅ Step 3a. Setup a Netlify account**

- Using the link [HERE](https://www.netlify.com), sign up for a new account and follow **Netlify's** instructions to create a **`New Site from Git`** (_you must be logged in to see this option_).

![Netlify Setup Example](./tutorial/netlify-signin.png?raw=true)

- Once signin ,you should land on the following page.

![Netlify Setup Example](./tutorial/netlify-empty.png?raw=true)

**✅ Step 3b. Create a new site**

- Move to the `Sites` tab and Click the `New site from git` button.

![Netlify Setup Example](./tutorial/netlify-createsite-1.png?raw=true)

- On the new page select `Github` and locate the proper repository in your github Account.

![Netlify Setup Example](./tutorial/netlify-createsite-2.png?raw=true)

- After allowing the application `Netlify` on Github select the `BattleStax` 

![Netlify Setup Example](./tutorial/netlify-createsite-3.png?raw=true)

- Use all of the defaults for `Basic Build Settings`

![Netlify Setup Example](./tutorial/netlify-createsite-4.png?raw=true)

- Click `Show advanced` to enter the following variables:

> `ASTRA_DB_USERNAME` as `battle_user` *(The user name we defined when creation the Astra instance)*

> `ASTRA_DB_PASSWORD` as `battle_password1` *(The password we defined when creation the Astra instance)*

> `ASTRA_DB_KEYSPACE` as `battlestax` *(The keyspace we defined when creation the Astra instance)*

> `ASTRA_DB_ID` as the cluster ID of your Astra DB. To get your database ID and region go the ASTRA summary page. Locate the cluster ID and copy it by clicking the clickboard icon as showed below. 

![Netlify Setup Example](./tutorial/netlify-createsite-5.png?raw=true)

> `ASTRA_DB_REGION` as the region you picked when creating the DB., It should be either `us-east-1` or `europe-west1`

> `GAMES_COLLECTION` as `games` this is the collection where we will store all values.

- You should now have something like

![Netlify Setup Example](./tutorial/netlify-createsite-6.png?raw=true)

**✅ Step 4c. Deploy your site** 

Click **`Deploy Site`** and once deployed copy the domain name of your new site from **Netlify**. 

![Netlify URL Example](https://raw.githubusercontent.com/kidrecursive/battlestax-tutorial/step-1/tutorial/netlify_url.png)

Finally, wait for deployment! 

![Netlify Setup Example](./tutorial/netlify-createsite-7.png?raw=true)

When your new site is ready, you will be able to go to: `<your_url>.netlify.app` to see your game.

![Netlify Setup Example](./tutorial/netlify-createsite-8.png?raw=true)

If you start new games it will create a new record in the database. If you want to validate this behavirour click on `START NEW GAME`

- Open Astra UI, show the CQLCONSOLE and execute the following command (here *battlestax* is your keyspace and *games* your collection name - if you chose another names adapt the query accordingly).

📘 **Commands to execute**

```
select key,text_value from battlestax.games;
```

- You should have a result that looks like 

![Netlify Setup Example](./tutorial/netlify-createsite-9.png?raw=true)

[🏠 <--Back to the top](#table-of-contents)

## 4. Setup for Production CI/CD

Every application should have a CI/CD *(**C**ontinous **I**ntegration, **C**ontinuous **D**eployment)* pipeline. This allows for quick iteration of changes to production deployment by taking advantage of automation and tests to ensure everything is working properly. 

After each commit a workshow is initialized to BUILD your project, EXECUTE tests and DEPLOY to netlify. 

The good thing is many CI/CD tools are provided right within **GitHub**. Adding this capabiity just takes a couple steps.

**✅ Step 4a. Add secret variables** 

Remember those variables we set when we configured **Netlify**? We need to add these same variables to our **GitHub** repository.

Within **YOUR** Battlestax repository click on **`Settings`** in the top toolbar, choose **`Secrets`** from the menu on the left, and finally click the **`New secret`** button on the top right of the page. Add a secret for each of the variables we used earlier. [GO](/settings/secrets/actions/new)

You notice that those are the same as used by netlify. Github will populate them at deploy time.
```
ASTRA_DB_USERNAME=battle_user
ASTRA_DB_PASSWORD=battle_password1
ASTRA_DB_KEYSPACE=battlestax
ASTRA_DB_ID=PLACEHOLDER<--NEEDS INSTRUCTION
ASTRA_DB_REGION=PLACEHOLDER<--NEEDS INSTRUCTION
GAMES_COLLECTION=games
```

- That should look like :

![Netlify Setup Example](./tutorial/setup-github-1.png?raw=true)


**✅ Step 4b. Test out an application build**

|✔️ Using `git`, create a new branch and issue an empty commit, then push it to your repository.|
|---|

<details><summary><i>Click to view the solution</i></summary>
<p>
📘 **Commands to execute**

```bash
git checkout -b test_pr
git commit --allow-empty -m "New branch to test ci/cd"
git push origin test_pr
```
</p>
</details>

|✔️ Using `Github UI`, merge your new branch to the master through a pull request|
|---|

<details><summary><i>Click to view the step-by-step solution</i></summary>
<p>
- Select your new branch in github

![Netlify Setup Example](./tutorial/setup-github-2.png?raw=true)

- open a PR but click and `Compare & Pull request` button. for `test_pr` into `master`. Caution don't target the original master from DataStax-Academy but **YOUR** master


![Netlify Setup Example](./tutorial/setup-github-3.png?raw=true)

![Netlify Setup Example](./tutorial/setup-github-4.png?raw=true)

![Netlify Setup Example](./tutorial/setup-github-5.png?raw=true)

![Netlify Setup Example](./tutorial/setup-github-6.png?raw=true)

![Netlify Setup Example](./tutorial/setup-github-7.png?raw=true)

![Netlify Setup Example](./tutorial/setup-github-8.png?raw=true)

![Netlify Setup Example](./tutorial/setup-github-9.png?raw=true)

Collapse avec les details

</p>
</details>

|✔️ Browsing `Netlify`, see the ci/cd process rolling wuth tests deployment|
|---|

<details><summary><i>Click to view step-by-step and screenshots</i></summary>
<p>
<.>
</p>
</details>

[🏠 <--Back to the top](#table-of-contents)

## 5. Configure your IDE
Do things with an IDE and stuff

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Academy/battlestax)

[🏠 <--Back to the top](#table-of-contents)

Ok, great. You should be all setup and ready to start coding against your app. 

**Click** below to move to the next section.

[Go to Create a REST API -->](./README_step01.md)

```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```