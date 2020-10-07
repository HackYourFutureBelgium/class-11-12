const replaceInReadme = require('./replace-in-readme.js');

const repoData = require('./data/index.json');

const links = `
- [Modules](#modules)
- [Students](#students)
- [Coaches](#coaches)
- [Issues](https://github.com/${repoData.userName}/${repoData.repoName}/issues)
    - [\`help-wanted\`](https://github.com/${repoData.userName}/${repoData.repoName}/issues?q=is%3Aopen+label%3Ahelp-wanted)
    - [\`roll-call\`](https://github.com/${repoData.userName}/${repoData.repoName}/issues?q=label%3Aroll-call)
- [Pull Requests](https://github.com/${repoData.userName}/${repoData.repoName}/pulls)
- [Shared Notes](./shared-notes)
`;

replaceInReadme(links, 'LINKS');
