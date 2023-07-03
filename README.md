<img alt="React Boilerplate Meets CRA" src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:low/1632338467364-header-mobile-2720x440px.png" align="center">

<br />

<div align="center" >Crafted for <strong>highly scalable</strong> & <strong>performant</strong> and <strong>easily maintainable</strong> React.js applications <br />
with a focus on <strong>best DX</strong> and <strong>best practices</strong> using <a href="https://github.com/react-boilerplate/react-boilerplate-cra-template">React Boilerplate CRA Template</a>.
</div>

<br />

This project tries to get the `lat/lng` from the user or search by address using _Google Geo Location API_ to get **Nike Stores (Brazil)** near you with delivering times (_mocked data_).

**📚 Documentation:** [Gitbook](https://cansahin.gitbook.io/react-boilerplate-cra-template/)
<br>
**📱 Live demo**: [TikTok video](https://www.tiktok.com/@indianboybr/video/7254776200063667461)

## Install & Start

⚠️ Using [Yarn Package Manager](https://yarnpkg.com) is recommended over `npm`. Use at least [Node.js](https://nodejs.org/en) v14 or higher.

```shell
git clone --depth=1 git@github.com:IndianBoyBR/NikeStore-Finder-ReactJS.git

cd NikeStore-Finder-ReactJS

yarn install
```

Start with live reload (for development mode):

```shell
yarn start
```

## Folders & Files Structure

```shell
src
├── app
│   ├── components                   # UI Components (Atomic Design concept)
│   │   ├── atoms
│   │   ├── hocs                     # HOCs (High Order Components)
│   │   ├── molecules
│   │   └── organisms
│   ├── configs                      # Configuration files
│   ├── hooks                        # Custom React.js Hooks
│   ├── pages                        # Pages
│   └── styles                       # Setup themes, styles
│       └── themes
│           └── light-theme.ts
├── locales                          # Setup i18n
│   └── pt
├── mocks                            # Mocks (msw)
├── store                            # Configuration for @reduxjs/toolkit store
├── types                            # Interfaces, types
└── utils                            # Utilities, helpers
```

## Features

<dl>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Industry-standard i18n internationalization support</dt>
  <dd>Scalable apps need to support multiple languages, easily add and support multiple languages.</dd>

  <dt>Typescript</dt>
  <dd>Typescript is the key to scalability. Build self-documented code, easy-to-debug code and create maintainable large applications and codebases with a highly productive development experience.</dd>

  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Static code analysis</dt>
  <dd>Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.</dd>

  <dt>SEO</dt>
  <dd>We support SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

<sub><i>Keywords: Create React App, React Boilerplate, Custom Template, Typescript, React.js, Redux, Hot Reloading, ESNext, Babel, Storybook, react-router, `styled-components`, redux-saga, FontFaceObserver</i></sub>

## Tests Report

<img alt="Jest test report" width="650" height="300" src="https://github.com/IndianBoyBR/NikeStore-Finder-ReactJS/assets/27955793/dc0cd5de-c524-4993-80b7-176740286997" />

## License

This project is licensed under the MIT license, Copyright (c) 2023 IndianBoyBR.
For more information see `LICENSE.md`.
