# hello
babel, eslint, webpack, tsconfig 같은 환경설정 툴의 option 들을 `hello` 하며 확인해보는 directory

## hello--babel-config-file-case1
root project 에서 babel 설정을 잘 쓰는지 확인  
부모는 empty 설정되어 있는 상태에서
자식 에서 arrow trans plugin 이 설치되어 있고
`const a = function () {};` 기대한 대로 결과가 출력되었음

## hello--babel-config-file-case2
root project 에서 babel 설정을 잘 쓰는지 확인  
부모 에서 arrow trans plugin 이 설치되어 있고
자식은 empty 설정되어 있는 상태에서
`const a = function () {};` 기대한 대로 결과가 출력되었음

## hello--babel-with-corejs
`"babel:transformArrowFunction"` arrow 잘 변환하는지 확인  
`"babel:polyfill:usage"` 쓰는것만 폴리필 하는지 확인  
`"babel:polyfill:entry"` 전체 폴리필 하는지 확인  
`"babel:polyfill:runtime"` 런타임으로 쓰는것만 폴리필 하는지 확인  

## hello--eslint-plugin-ts
eslint plugin 제작 hello  
`plugin:hello` 패키지에 제작된 hello lint rule 과 test 코드를 셈플로 만들어놨음  
`playground`는 `plugin:hello`를 사용하는 패키지  
references
- [How to create a custom ESlint plugin](https://devsmitra.medium.com/how-to-create-an-eslint-plugin-b57fd9fe604a)  
- [Create a custom eslint rule with typescript](https://dev.to/bwca/create-a-custom-eslint-rule-with-typescript-4j3d)

## hello--tsconfig-downlevelIteration
`downlevelIteration` 옵션이 동작하는 모습 관찰  
`$ tsc:build`, `tslib` 사용 downlevelIteration 적용  
`$ tsc:build:withHelper`, `tslib` 사용 downlevelIteration 미적용  

## hello--tsconfig-references
한 패키지안에 두개의 tsconfig root 가 존재할때, references 동작 확인

## hello--tsconfig-references-package
두개의 패키지에 각각 tsconfig 가 존재하고 src1 가 compose true 의 references 일때 동작 확인

## hello--tsconfig-rootDirs
`rootDirs` 를 설정했을때 모두 root 로 등록되는지 확인

## hello--webpack-babel-arrow-function
기본 웹팩 설정과 babel:transformArrowFunction 을 했을때 동작확인

## hello--webpack-tree-shaking
package 의 `sideEffect` 와 webpack 의 `minify` 가 잘 동작하는지 확인  
- case 1: 외부 라이브러리 트리 쉐이킹 Hello
- case 2: parent 에서 정의되서 self 로 사용하는 것
  - parent 안에서 정의된건 알아서 잘 쉐이킹하네 방법은 case1 처럼 하면 됨
- case 3: Atom.Button.MainButton 같이 체이닝 하는거
- case 4: sideEffect 가 있는데 무시하고 false 로 한 경우
- case 5: dynamic import
`/* webpackExports: ["a"] */ ` 키워드 쓰면 쌉가능!
```typescript
import(/* webpackExports: "a" */ 'module')
.then(module => {
  // Only module.a is available
  // No other export is available...
  // Chunk size & network latency are reduced...
})
```  

`references` 설정했을때 ts-loader 와 잘 동작하는지 확인

