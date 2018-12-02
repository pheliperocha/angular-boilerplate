<h1 align="center">
  Project Name
</h1>

<h4 align="center">
  Project Description
</h4>

<p align="center">
    <a href="https://travis-ci.com/pheliperocha/angular-boilerplate"><img src="https://travis-ci.com/pheliperocha/angular-boilerplate.svg?branch=master"></a>
    <a href="https://github.com/pheliperocha/angular-boilerplate/issues"><img src="https://img.shields.io/github/issues/pheliperocha/angular-boilerplate.svg"></a>
    <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg"></a>
    <a href="https://www.conventionalcommits.org/"><img src="https://img.shields.io/packagist/l/doctrine/orm.svg"></a>
</p>

---

## Features
 
* Organized folder structure for small and big projects;
* _base.scss to normalize the project styles.
* variables.scss to organize and turn more concise the styles of the project.
* CoreModule to import all singleton services.
* SharedModule to import and declare all shared modules, components, directives, pipes and etc.
* A nice README.md.
* Npm Scripts commands.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/pheliperocha/angular-boilerplate).

We also use [Conventional Commits](http://conventionalcommits.org/) and [Standard Version](https://github.com/conventional-changelog/standard-version), to automatic versioning and [CHANGELOG](CHANGELOG.md) generation

## NPM Commands

|Command|Description|
|-------:|--------|
| npm start | Builds the application and starts a web server for development purpose, with live-reload on change files. |
| npm run ng | Run Angular CLI without the necessity of it been installed globally. Check Angular CLI documentation: https://cli.angular.io/ |
| npm run build | Compiles the application for production into an output directory (`/dist`). |
| npm run test | Execute unit tests via Karma with live-reload on file changes. |
| npm run test:no-watch | Execute unit tests via Karma a single time and with chrome headless. |
| npm run test:coverage | Execute unit tests outputting a code coverage report on `/src/coverage` folder. |
| npm run lint | Execute a lint using tslint. |
| npm run e2e | Execute end-to-end tests via Protractor. |
| npm run ci | Run lint, unit tests, end-to-end tests and build in a single command to check for any error. |
| npm run release | Run Standard-Version CLI to make the changelog and bump version. |

## Project Structure

```
src
|
|-- app
|   |-- app.module.ts
|   |-- app.routes.ts
|   |-- app.component.component.ts|html|scss|spec.ts
|   |
|   |-- [+] components
|   |-- [+] directives
|   |-- [+] interceptors
|   |-- [+] interfaces
|   |-- [+] models
|   |-- [+] modules
|   |-- [+] pipes
|   |-- [+] services
|
|-- assets
|   |-- [+] icons
|   |-- [+] images
|
|-- config
|   |-- [+] environments
|   |-- [+] settings.ts
|
|-- styles
    |-- [+] externals
    |-- [+] partials
    |-- styles.scss
    |-- theme.scss
```

## Credits

This software uses code from several open source packages.

- [Angular](https://angular.io/)
- [RxJS](https://github.com/ReactiveX/rxjs)
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Jasmine](https://jasmine.github.io/)
- [Karma](https://github.com/karma-runner/karma)
- [Protractor](https://www.protractortest.org/#/)
- [Standard Version](https://github.com/conventional-changelog/standard-version)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

---

> Website [pheliperocha.com](https://pheliperocha.com) &nbsp;&middot;&nbsp;
> GitHub [@pheliperocha](https://github.com/pheliperocha) &nbsp;&middot;&nbsp;
> Linkedin [@pheliperocha](https://www.linkedin.com/in/pheliperocha/)
