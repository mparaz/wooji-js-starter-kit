# wooji-js-starter-kit
`React` with `CSS` and `JS` of the future

## Toolchain:
* `JS` User interface library: [`React`](https://facebook.github.io/react)
* `JS` Transpiler *(ES6-to-ES5)*: [`Babel`](https://babeljs.io) *(via [`babelify`](https://github.com/babel/babelify); also compiles `JSX` to `HTML`)*
* `JS` Module Loader *(and Bundler)*: [`Browserify`](http://browserify.org)
* `CSS` **Post**processor: [`PostCSS`](https://github.com/postcss/postcss) *(w/ [`cssnext`](http://cssnext.io))*
* Task Runner *(and `CLI`)*: [`Gulp`](http://gulpjs.com)
* Server *(and Reloader)*: [`Browsersync`](http://browsersync.io)
* Platform *(and Package Manager)*: [`io.js`](https://iojs.org) *(includes [`npm`](https://npmjs.com))*


## Prerequisites:
* nvm:

  See [Install script](https://github.com/creationix/nvm#user-content-install-script) for the latest version.
  ```
  # Install:
  $ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash

  # Reload .bashrc:
  . ~/.bashrc
  ```

* iojs:
  ```
  # Install:
  $ nvm install iojs

  # Activate:
  $ nvm use iojs
  ```

## Getting Started:
  1. Download:
  ```
  $ git clone https://github.com/wooji-js/wooji-js-starter-kit
  ```

  2. Move to directory:  
  ```
  $ cd wooji-js-starter-kit
  ```

  3. Install packages:
  ```
  $ npm run install:all
  ```

  4. Start the application:
  ```
  $ npm start
  ```

## Changelog:
### v0.1:
* Add instructions
* Change description
* Change script: `install:all`
