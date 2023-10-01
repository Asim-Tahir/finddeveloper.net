<h1><img src="src/assets/svgs/logo.svg" width="300"/> Changelog</h1>

All notable changes to [`finddeveloper.net`](https://finddeveloper.net) project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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