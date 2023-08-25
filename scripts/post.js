const fs = require("fs");

const POST_PATH = `${process.cwd()}/_posts`;

function createTemplate(title = "new-post") {
  fs.writeFile(
    `${POST_PATH}/${title}.md`,
    `---
title: ${title}
rexcerpt:
rcoverImage:
date: ${new Date().toISOString()}
author:
  name: hijack2ee
  picture:
ogImage:
  url:
---`,
    console.error
  );
}

function main() {
  createTemplate(process.env.POST_TITLE)
}

main();
