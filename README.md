# aurelia-navigation-aspnet5

A sample ASP.NET 5 & Aurelia navigation skeleton project.

This basic starter project joins together the **ASP.NET 5 Empty Web Preview Template** with the essential parts of the [Aurelia/Skeleton-Navigation] (https://github.com/aurelia/skeleton-navigation). (inspired by the excellent "Aurelia Hello World with ASP.NET 5" blog post from OdeToCode).


As Aurelia is still currently in development things could get a little wonky, so I'll try to keep this project in working condition.


_From the Aurelia skeleton navigation instructions_:

You may need to verify you installed jspm and then run jspm install from the folder above wwwroot prior to build.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts. If you choose to authorize jspm by an access token instead of giving your password (see GitHub `Settings > Personal Access Tokens`), `public_repo` access for the token is required.
5. Install the client-side dependencies with jspm:

  ```shell
  jspm install -y
  ```
  
  


## Running The Unit Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
then:

  ```shell
  karma start
  ```




