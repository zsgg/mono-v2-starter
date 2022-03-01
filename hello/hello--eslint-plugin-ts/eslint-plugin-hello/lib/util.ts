import { readdirSync } from 'fs';
import { sep } from 'path';

export const getFileInfo = (filename: string) => {
    // 이걸로 폴더내 index 있는지 유무 알아내면 될듯
    const fileNamePath = filename;
    const last = filename.lastIndexOf(sep);
    const folderPath = fileNamePath.slice(0, last);
    const fileFullName = fileNamePath.slice(last).replace(sep, '');
    readdirSync(folderPath).forEach((file) => {
        console.log(file);
    });
    return {
        fileFullName,
        fileNamePath,
        folderPath,
    };
};
