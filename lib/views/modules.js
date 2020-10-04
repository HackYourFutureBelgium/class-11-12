module.exports = (module, mainData) => (
  `<h3><a href="${module.url ? module.url : `https://github.com/${mainData.userName}/${module.name}`}" target="_blank">${module.name}</a></h3>\n` +
  ((module.weeks || module.project || module.milestone) ? (`  <ul><li><p>` +
    (module.weeks ? `    ${module.weeks === 1 ? '1 week' : module.weeks + ' weeks'}` : '') +
    (module.weeks ? `    | <a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=is%3Aopen+milestone%3A${module.name}+label%3Aindividual" target="_blank"><code>individual</code> issues</a> ` : '') +
    (module.project ? `    | <a href="https://github.com/${mainData.userName}/${mainData.repoName}/projects/${module.project}" target="_blank"><code>group</code> projects</a> ` : '') +
    (module.milestone ? `    | <a href="https://github.com/${mainData.userName}/${mainData.repoName}/milestone/${module.milestone}" target="_blank">all issues</a> ` : '') +
    (module.weeks ? `    | <a href="https://github.com/${mainData.userName}/${module.name}#class-recordings" target="_blank">class recordings</a> ` : '') +
    `  </p></li></ul>`) : '')
);
