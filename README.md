# Portfolio Website
Last Updated: 12.28.2018
## Table of Contents
- Project Overview
- Developer Information
- Author
## Project Overview
This website contains information about my background, education, work experiences, and skills as well as some development project examples. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Developer Information
#### Contents
- the `src` directory contains all React necessary files
- `src/index.js` is the entry point. It creates a Router to load other pages
- `src/components` contains the React class declarations for each component
- `src/styles` contains all CSS
- `build/` contains the compiled files
### Installation:
#### Tools:
- You will need node in order to build, run and develop this project
- I recommend installing node via a version manager such as nvm
  - `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
- See the following [repository](https://github.com/creationix/nvm) for more information.
- Make sure to use node version 11.6.0
  - If you do not have 11.6 installed, run `nvm install 11.6`
  - If you do have 11.6 installed, run `nvm use 11.6`
- I will be using yarn in the following scripts, but npm will also work
#### Initializing the Project:
- Clone repository `git clone https://github.com/tmonfre/portfolio-website/`
- `cd portfolio-website/`
- Make sure you are on the master branch
- `yarn install`
#### Available Scripts:
In the project directory, you can run:
##### `yarn start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>
You will also see any lint errors in the console.
##### `yarn test`
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
##### `yarn build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
##### `yarn eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

##### Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

#### Deploying Changes
- The frontend is deployed using surge, so first make sure you install surge if you don’t already have it
	`npm install --global surge`
- Next navigate to the root directory
- Run `surge`
- Press enter to confirm the directory to publish from
- Enter the domain you would like to publish to
- Visit your published domain to view the site
## Author
Thomas Monfre, Dartmouth College.
tmonfre.surge.sh
Find me on LinkedIn at https://www.linkedin.com/in/thomas-monfre-0b1a50164/
