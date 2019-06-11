# Portfolio Website

## Project Overview

This website contains information about my background, education, work experiences, and skills as well as some development project examples.

## Installation

1. If you don't have homebrew installed, install it by following the instructions linked [here](https://brew.sh/).
2. If you don't have yarn installed, install it by  following the instructions linked [here](https://yarnpkg.com/en/docs/install#mac-stable).

## Setting Up Project

- `git clone https://github.com/tmonfre/portfolio-website`
- `cd portfolio-website/`
- `yarn install`

## Available Scripts

- `yarn start` runs project in development mode
- `yarn build` bundles and minifies for deployment
- `yarn clean` removes build folder
- `yarn deploy` builds, deploys to surge, cleans

## Running Dev Environment

- `cd` into root directory
- `yarn start`
- Navigate to [localhost:8080](localhost:8080) to view the site

## Deployment

Deployed using `surge`. Install globally by running `npm install -g surge`.

Run `yarn deploy` to publish. Script is setup to deploy to `thomasmonfre.me` with proper credentials.

Website can be found at [http://thomasmonfre.me](http://thomasmonfre.me).

## Author

Thomas Monfre, Dartmouth College '21
