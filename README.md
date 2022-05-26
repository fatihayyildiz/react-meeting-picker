<div id="top"></div>
<!--
*** Forked from https://github.com/othneildrew/Best-README-Template 
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/fatihayyildiz/react-meeting-picker">
    <img src="https://github.com/fatihayyildiz/react-meeting-picker/blob/master/misc/react-meeting-picker.png?raw=true" alt="Logo">
  </a>

<h3 align="center">React.js + Typescript Meeting Picker App</h3>

  <p align="center">
    This project implemented for solve code challenge with React.js and Typescript. 
Contains all features/requirements written in Assignment document. 
Develop for Agents which they can use this website to choose a (possible for the seller) time slot
in several days.
    <br />
    <br />
    <a href="https://fatihayyildiz.github.io/react-meeting-picker/">Live Demo</a>
    ·
    <a href="https://github.com/fatihayyildiz/react-meeting-picker/issues">Report Bug</a>
    ·
    <a href="https://github.com/fatihayyildiz/react-meeting-picker/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#known-issues">Known Issues</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Screenshot

[![To Do App Screen Shot][product-screenshot]](https://github.com/fatihayyildiz/react-meeting-picker/blob/master/misc/screenshot.png?raw=true)


### Built With

* [React.js](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [axios](https://axios-http.com/)
* [@reduxjs/toolkit](https://redux-toolkit.js.org/)
* [@testing-library](https://testing-library.com/)
* [bootstrap](https://getbootstrap.com/)
* [husky](https://typicode.github.io/husky/#/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.
<br />

Clone this repository with following command:
```sh
  git clone https://github.com/fatihayyildiz/react-meeting-picker.git
  ```

### Prerequisites

Requirements to run this project locally:

- Node >= v14
- yarn >= v1.22.* or npm >= v6.14.*

* Node:
  https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

* yarn (recommended)
  ```sh
  npm install --global yarn
  Alternatives:
  brew install yarn
  curl -o- -L https://yarnpkg.com/install.sh | bash
  ```

* npm
  ```sh
  npm install npm@latest -g
  ```
* VS Code Configuration
<br />Absolute path import implemented for this project. Newer versions of VS Code can handle this config automatically
but in case of issue appears please check this link out to configure VS Code env: https://justinnoel.dev/2019/06/18/configuring-react-absolute-imports-for-typescript
Webstorm IDE can detect this config automatically.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/fatihayyildiz/react-meeting-picker.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
   or
   <br />
   
   ```sh
   npm install
   ```
3. Visit in your favorite browser this url: http://localhost:3000

<p align="right">(<a href="#top">back to top</a>)</p>


## Known Issues
- msw the latest package has some critical dependency issue: https://github.com/mswjs/msw/issues/1252 because of this, msw package version statically set to 0.40.


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
