# Modern Frontend Monorepo Starter
구축하기 번거로운 Modern Frontend 의 개발환경을 모노리포가 가능한 스타터로 제공하여 간편하게 apps 를 시작하기 위한 저장소


## Spec
- yarn berry(@2) with zero install
- react
- emotion
- nextJs
- nestJs
- jest
- testing-library
- cypress
- storybook
- eslint, prettier
- webpack


## Installation
install cli  
1. yarn install `npm install yarn -g`
2. git lfs 설치 `git lfs install`


## How To Use
fork 하여
설정되어 있는 workspace 에 따라
```shell
"workspaces": [
  "apps/**/*",
  "hello/**/*",
  "packages/**/*",
  "playground/**/*",
  "recipes/**/*"
],
```
apps 와 packages 를 추가하고 서비스를 개발


## Code Convention
export 되는 `class` 또는 `interface` 또는 `react Component` 가 파일이름과 동일하지만 
대소문자만 다르다면 파일이름을 대문자로 변경 후 `export default`로 변경 (eslint 제작예정)


## Table of Contents
- [Log](./readme-log.md)
- [Hello](./hello/readme.md)    
- [Playground](./playground/readme.md)
- [Trouble Shooting](./readme-troubleshooting.md)
- [Useful CLI](./readme-useful-cli.md)
- [Contribute Check Point](readme-contribute-check-point.md)
