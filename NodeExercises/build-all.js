const fs = require('fs');
const path = require('path');
const { exec} = require('child_process');
const parentDir = __dirname;

const buildAll = async () => {
    const dirs = fs.readdirSync(parentDir);
    for (const dir of dirs) {
        const newDir = path.join(parentDir, dir);
        const stat = fs.statSync(newDir);
        if (stat.isDirectory() && dir !== 'node_modules' && dir !== '.idea') {
            const files = fs.readdirSync(newDir);
            for (const file of files) {
                if (path.extname(file) === '.ts') {
                    console.log(`Building ${file}...\n`);
                    const filePath = path.join(newDir, file);
                    await exec(`npx tsc ${filePath}`, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(`Finished building ${file}...\n`);
                        }
                    });
                }
            }
        }
    }
}

buildAll();
