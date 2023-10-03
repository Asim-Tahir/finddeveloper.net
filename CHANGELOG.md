<h1><img src="src/assets/svgs/logo.svg" width="300"/> Changelog</h1>

All notable changes to [`finddeveloper.net`](https://finddeveloper.net) project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.6.0] - 2023-10-04

### Features:

- add `user` store for global authorization
- add `/api/login` route handler
- add `service` for json placeholder's `/users/:id/` endpoint
- add `user` service for authorization

### Refactors:

- combine `counter` store actions as all-in-one
- use `user` store in `hero` section

## [0.5.0] - 2023-10-03

### Features:

- add [`redux`](https://github.com/reduxjs/redux) and [`react-redux`](https://github.com/reduxjs/react-redux) with [`redux-thunk`](https://github.com/reduxjs/redux-thunk) ([#17](https://github.com/Asim-Tahir/finddeveloper.net/issues/17))

## [0.4.0] - 2023-10-02

### Features:

- add `service` layer ([#15](https://github.com/Asim-Tahir/finddeveloper.net/issues/15))
- add `job-postings` [API route](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) to use in `services`
- share `job-postings` types globally
- add [`ms`](https://github.com/vercel/ms) library to make milliseconds more readable

### Refactors:

- rename `job-postings` mock data
- move `alt`(alternate text) field out of sampled img data in `job-postings` mock data
- use `service` + [API route](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) instead of mock data from props in `job-postings` section


## [0.3.0] - 2023-10-01

### Features:

- add `action-cards` section ([#13](https://github.com/Asim-Tahir/finddeveloper.net/issues/13))
- add the black color with opacity 30% with the name `--black-30`
- add global types for sampled static image data
- add `*.d.ts` to include next-env types in `tsconfig`

### Refactor:

- change html lang attribute as `tr`
- remove `normalize.css` dependency
- reduce reset css to keep only essential styles
- revert: "refactor: use module import without tilde", because without tilde import not working
- use styles without module css in homepage

## [0.2.0] - 2023-10-01

### Features:

- add `featured-job-postings` section ([#9](https://github.com/Asim-Tahir/finddeveloper.net/issues/9))
- add `@/*` alias in both `webpack` and `turbopack` config
- add `line-clamp-1` utility css class
- add `swiper` as dependency

### Refactors:

- use module import without tilde(~) in `.scss` files
- remove `~/*` alias from `tsconfig.json`
- fix `swiper` version to `v10.3.1`
- extend typing of next config for `sassOptions` option
- change all elements `box-sizing` as `border-box`

## [0.1.0] - 2023-09-28

### Features:

- add custom `Mark Pro` and `Nunito` fonts via [`next/font`](https://nextjs.org/docs/app/api-reference/components/font) ([#5](https://github.com/Asim-Tahir/finddeveloper.net/issues/5))
- add `hero` section ([#7](https://github.com/Asim-Tahir/finddeveloper.net/issues/7)).
- add `popular-searches` section ([#4](https://github.com/Asim-Tahir/finddeveloper.net/issues/4))

### Refactor:

- reword `SearchRecord` interface name as `PopularSearchRecord ` ([#11](https://github.com/Asim-Tahir/finddeveloper.net/pull/11)).
