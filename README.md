# Project template Intro

This uses Angular's CLI template within a Visual Studio project and includes the whole solution.
I have included Web API integration with one controller called PingController as well as some example components and service that allow for making Http requests to the Service.

I have also put a folder structure in place that reflects what a large application would use to organise the code better.

# Setup up

Ensure you have Typescript version 2.2+ installed on your machine. This is required so that MSbuild does not complain when trying to compile your code.

Run below from project root:

<b>npm Install</b>

Install Angular CLI globally on your machine:

<b>npm install - g @angular / cli</b>

Note: To use angular CLI, you probably should be using the latest version of NodeJs and update your version of npm to make sure:

<b>npm install npm@latest –g</b>

Would be benefitial to install npm task runner if you are using Visual Studio (Extensions and Updates). You can then run the npm task called 'dev', which will build and create the dist folder. The web.config is setup so that it will redirect any requests to index.html to dist/index.html. So set the startup page to index.html and it will re-direct to the dist location.
