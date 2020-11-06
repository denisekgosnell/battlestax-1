# 00. Setup environment and tools

[![License Apache2](https://img.shields.io/hexpm/l/plug.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Discord](https://img.shields.io/discord/685554030159593522)](https://discord.com/widget?id=685554030159593522&theme=dark)
[![Actions Status](https://github.com/DataStax-Academy/battlestax/workflows/BattleStax%20Tests/badge.svg)](https://github.com/DataStax-Academy/battlestax/actions) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/e265340f-c6a6-4d7b-b24c-438b87c67876/deploy-status)](https://app.netlify.com/sites/battlestax-tutorial/deploys)

[🏠 <--Back to Table of Contents](./README.md#table-of-contents)

This is arguably the biggest step in the whole workshop. Once you get your tools and environment setup you'll be good to go, not just for this workshop, but for your own **JAMStack** applications moving forward. Just repeat the process for your own application repositories.

## Table of Contents

| Title  | Description
|---|---|
| **1. Fork the BattleStax repo** | [Fork the BattleStax repo](#1-fork-the-battleStax-repo) |
| **2. Create your Astra instance** | [Create your Astra instance](#2-create-your-astra-instance) |
| **3. Configure your IDE** | [Configure your IDE](#3-configure-your-ide)
| **4. Setup Netlify account** | [Setup Netlify account](#4-setup-netlify-account)
| **5. Setup for Production CI/CD** | [Setup for Production CI/CD](#5-setup-for-production-ci/cd)


## 1. Fork the BattleStax repo
Placeholder text

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
## 3. Configure your IDE
Do things with an IDE and stuff

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Academy/battlestax)

|

|

|

|

|


[🏠 <--Back to the top](#table-of-contents)
## 4. Setup Netlify account
Placeholder text

|

|

|

|

|


[🏠 <--Back to the top](#table-of-contents)
## 5. Setup for Production CI/CD
Placeholder text

|

|

|

|

|


[🏠 <--Back to the top](#table-of-contents)

Ok, great. You should be all setup and ready to start coding against your app. 

**Click** below to move to the next section.

[Go to Create a REST API -->](./README_step01.md)