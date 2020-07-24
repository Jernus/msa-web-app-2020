# msa-web-app-2020

Description of build and release pipelines


First, I add two branches to the trigger section. Therefore, if there any commits and pushes to master or develop branch, the pipeline will start to build and deploy. The virtual machine I choose Linux just like the tutorial use.


Second, I add two variables - rootDir and buildDir - to enhance readability.


Third, I defined four steps for the main part

step1. install the latest version of  Node.js

step2. install and build the project

step3. build the artifact(a zip file) for this project so it can run everywhere.

step4. publish the artifact file
