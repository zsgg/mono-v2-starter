"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloPackageInfo = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const getRootPath = () => {
    for (const modulePath of module.paths) {
        try {
            const rootDir = path_1.default.join(modulePath, '..');
            // eslint-disable-next-line no-await-in-loop
            fs_1.default.accessSync(path_1.default.join(rootDir, '.pnp.cjs'), fs_1.default.constants.F_OK);
            return rootDir;
            // eslint-disable-next-line no-empty
        }
        catch (e) { }
    }
    throw new Error(`root 를 찾을 수 없습니다 | ${JSON.stringify(module.paths, null, 2)}`);
};
const getPackageNames = (source) => fs_1.default
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => path_1.default.join(source, dirent.name, 'package.json'))
    .map((packagePath) => {
    if (fs_1.default.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs_1.default.readFileSync(packagePath, 'utf8'));
        return {
            main: packageJson.main,
            name: packageJson.name,
        };
    }
    return undefined;
})
    .filter(Boolean);
const rootPath = getRootPath();
// console.log(`util > path > rootPath`, rootPath);
const helloPath = path_1.default.join(rootPath, 'hello');
// console.log(`util > path > sharedPath`, sharedPath);
const helloPackageInfo = getPackageNames(helloPath);
exports.helloPackageInfo = helloPackageInfo;
