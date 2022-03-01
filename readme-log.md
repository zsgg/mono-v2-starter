# Log
구축한 경험을 기억하기 위해 로그형식으로 남김

## 2021 07 10: husky install
`yarn dlx husky-init --yarn2 && yarn # Yarn 2`

## 2021 07 10: jest install
`npx ts-jest config:init`


## 2021 07 01: eslint prettier 적용;
처음에 그냥 되는게 안되서 당황;
yarn1 과 다르게 종속성을 직접 추가해라고 에러 메세지가 나오네 다 추가해줘야 동작함


## 2021 06 28: git lfs 적용;
lfs zip 에 적용
```shell
git lfs install
git lfs track "*.zip"
```
clone 후 lfs 가 잘 되지 않으면 lfs pull 필요
```shell
git clone ~
git lfs pull
```


## 2021 06 25: init;
```shell
# 버전확인
yarn -v

# 버전 3 으로 이 프로젝트 고정
yarn set version berry
yarn set version 3.0.0-rc.6
yarn set version latest

# yarn 설정 init
yarn init -w

# tsconfig 설정
yarn tsc --init
```
