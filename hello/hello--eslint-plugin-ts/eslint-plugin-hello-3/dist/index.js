"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const no_null_1 = __importDefault(require("./rules/no-null"));
const prefix_to_postfix_1 = __importDefault(require("./rules/prefix-to-postfix"));
const package_import_path_1 = __importDefault(require("./rules/package-import-path"));
const feature_import_constraints_1 = __importDefault(require("./rules/feature-import-constraints"));
const feature_export_index_constraints_1 = __importDefault(require("./rules/feature-export-index-constraints"));
const app_lib_component_path_backing_1 = __importDefault(require("./rules/app-lib-component-path-backing"));
const app_lib_entry_path_backing_1 = __importDefault(require("./rules/app-lib-entry-path-backing"));
const export_naming_1 = __importDefault(require("./rules/export-naming"));
const css_in_js_1 = __importDefault(require("./rules/css-in-js"));
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
        'app-lib-component-path-backing': app_lib_component_path_backing_1.default,
        // app 의 entry 는 자신외에 다른 곳에서 참조되지 못한다
        'app-lib-entry-path-backing': app_lib_entry_path_backing_1.default,
        // styled.* 는 카멜케이스
        'css-in-js': css_in_js_1.default,
        // todo export 네이밍 규칙
        'export-naming': export_naming_1.default,
        // feature 의 main 파일은 `export default { Lib?, Preset? } 만 허용
        'feature-export-index-constraints': feature_export_index_constraints_1.default,
        // feature|shared 에서 package/feature-*를 import 시 에러를 발생 시킨다
        'feature-import-constraints': feature_import_constraints_1.default,
        // null 로 작성된 코드는 undefined 로 warn
        'no-null': no_null_1.default,
        // package/(feature|shared) import 시 상대경로로 작성되었다면 절대경로로 fix
        'package-import-path': package_import_path_1.default,
        // postfix 로 키워드로 등록되어 문자는 prefix 로 작성시 에러발생 시키고 postfix 로 fix 한다
        'prefix-to-postfix': prefix_to_postfix_1.default,
    },
};
