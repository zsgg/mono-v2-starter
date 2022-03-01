import noNull from './rules/no-null';
import prefixToPostfix from './rules/prefix-to-postfix';
import packageImportPath from './rules/package-import-path';
import featureImportConstraints from './rules/feature-import-constraints';
import featureExportConstraints from './rules/feature-export-index-constraints';
import appLibComponentPathBacking from './rules/app-lib-component-path-backing';
import appLibEntryPathBacking from './rules/app-lib-entry-path-backing';
import exportNaming from './rules/export-naming';
import cssInJs from './rules/css-in-js';

module.exports = {
    configs: {
        all: {
            plugins: ['hello3'],
            rules: {
                'hello3/app-lib-component-path-backing': ['error', { componentPaths: [], entryPaths: [] }],
                'hello3/app-lib-entry-path-backing': ['error', { componentPaths: [], entryPaths: [] }],
                'hello3/css-in-js': 'error',
                'hello3/export-naming': 'error',
                'hello3/feature-export-index-constraints': 'error',
                'hello3/feature-import-constraints': 'error',
                'hello3/no-null': 'warn',
                'hello3/package-import-path': ['error', { importNames: ['utility'] }],
                'hello3/prefix-to-postfix': ['error', { words: ['model'] }],
            },
        },
    },
    rules: {
        // app 의 component 는 index 에서 export 되지 않은 변수를 다른 곳(component or entry ...) 에서 사용하지 못한다
        'app-lib-component-path-backing': appLibComponentPathBacking,
        // app 의 entry 는 자신외에 다른 곳에서 참조되지 못한다
        'app-lib-entry-path-backing': appLibEntryPathBacking,
        // styled.* 는 카멜케이스
        'css-in-js': cssInJs,
        // todo export 네이밍 규칙
        'export-naming': exportNaming,
        // feature 의 main 파일은 `export default { Lib?, Preset? } 만 허용
        'feature-export-index-constraints': featureExportConstraints,
        // feature|shared 에서 package/feature-*를 import 시 에러를 발생 시킨다
        'feature-import-constraints': featureImportConstraints,
        // null 로 작성된 코드는 undefined 로 warn
        'no-null': noNull,
        // package/(feature|shared) import 시 상대경로로 작성되었다면 절대경로로 fix
        'package-import-path': packageImportPath,
        // postfix 로 키워드로 등록되어 문자는 prefix 로 작성시 에러발생 시키고 postfix 로 fix 한다
        'prefix-to-postfix': prefixToPostfix,
    },
};
