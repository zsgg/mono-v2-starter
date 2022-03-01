import path from 'path';
import fs from 'fs';

const getRootPath = (): string => {
    for (const modulePath of module.paths) {
        try {
            const rootDir = path.join(modulePath, '..');
            // eslint-disable-next-line no-await-in-loop
            fs.accessSync(path.join(rootDir, '.pnp.cjs'), fs.constants.F_OK);
            return rootDir;
            // eslint-disable-next-line no-empty
        } catch (e) {}
    }
    throw new Error(`root 를 찾을 수 없습니다 | ${JSON.stringify(module.paths, null, 2)}`);
};

const getPackageNames = (source): { name: string; main: string }[] =>
    fs
        .readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => path.join(source, dirent.name, 'package.json'))
        .map((packagePath) => {
            if (fs.existsSync(packagePath)) {
                const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
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

const helloPath = path.join(rootPath, 'hello');
// console.log(`util > path > sharedPath`, sharedPath);

const helloPackageInfo = getPackageNames(helloPath);
// console.log(`util > path > featurePackageNames`, featurePackageNames);

export { helloPackageInfo };
