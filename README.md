# Jerry's Phase 1 project (Web App + DevOps)
Hello, my name is Jerry Lin and I'm choosing Front End Development path to complete during the MSA Phase 1.
- Microsoft Learn Username: Jerry Lin


## Web App
*web URL: https://msa-2020-jerry-frontend-webapp.azurewebsites.net/*

In this web app, I'm using *New York Times* **Most Popular API** to be the 3rd party REST API.

**Most Popular API**: https://developer.nytimes.com/docs/most-popular-product/1/overview
(This API will return Top 20 popular articles base on the given time period.)

**Request format**: https://<span></span>api.nytimes.com/svc/mostpopular/v2/viewed/**USER_INPUT_TIME_PERIOD**.json?api-key=**YOUR_NEW_YORK_TIME_API_KEY**
- **USER_INPUT_TIME_PERIOD**: the time period that user select
- **YOUR_NEW_YORK_TIME_API_KEY**: the access to this API

At the beginning, the website will ask user to input their name and select a time period(1 day, 7 days, or 30 days). After user click the search button, the result will display below the search bar.

Each Card contains the article's image, title and abstract. User also can click on "LEARN MORE" to visit the New York Time webiste and browse the entire article.


## DevOps
For the DevOps section, I'm using the same GitHub repository(Web App) since I thought it's really useful and helpful to combine two categories.

- First, I add two branches to the trigger section. Therefore, if there any commits and pushes to master or develop branch, the pipeline will start to build and deploy. The virtual machine I choose Linux just like the tutorial use. Furthermore, in the artifacts part, I add another filter to enable "develop" continuous deployment trigger.

- Second, I add two variables - rootDir and buildDir - to enhance readability.

- Third, I defined four steps for the main part

  1. install the latest version of  Node.js

  2. install and build the project

  3. build the artifact(a zip file) for this project so it can run everywhere.

  4. publish the artifact file
