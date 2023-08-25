const fse = require('fs-extra');

function moveFolder(source, target) {
  if (!fse.existsSync(source)) {
    console.error(`There is no ${source}`);
    return;
  }

  if (fse.existsSync(target)) {
    console.error(`There is already ${target}`);
    return;
  }

  const _temp = 'temp';
  try {
    fse.moveSync(`${source}/`, `${_temp}/`);
    fse.mkdirSync(`${target}/`, {recursive: true});
    fse.rmSync(`${source}`, {recursive: true});
    fse.moveSync(`${_temp}/`, `${target}/`);
    console.log(`MOVE ${source} to ${target}!`);
  } catch (error) {
    console.error(error);
  }
}

function main() {
  moveFolder('public', 'public/blog');
}

main();