require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 87:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const os = __nccwpck_require__(87)
const fs = __nccwpck_require__(747)

function setOutput(outputName, outputValue) {
  let out = `::set-output name=${outputName}::${outputValue}`
  return console.log(out)
}

function getRunnerUid() {
  return os.userInfo().uid
}

function getRunnerUser() {
  return os.userInfo().username
}

function getGitBranch() {
  let gitBranch = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF
  return gitBranch.replace(/^refs\/heads\//, '')
}

function getGitCommitSHA() {
  let gitCommitSha = process.env.GITHUB_SHA
  const eventName = process.env.GITHUB_EVENT_NAME
  
  if (eventName == 'pull_request') {
    const eventData = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH))
    gitCommitSha = eventData.pull_request.head.sha
  }

  return gitCommitSha
}

function getGitCommitShortSHA() {
  return getGitCommitSHA().substring(0, 7)
}

function getGitDasherizedBranch() {
  let dasherized = getGitBranch().split('/').reverse().join('-').toLowerCase()
  return dasherized.replace(/[^a-z0-9]/gmi, '-')
}

setOutput('git-branch', getGitBranch())
setOutput('git-dasherized-branch', getGitDasherizedBranch())

setOutput('git-commit-sha', getGitCommitSHA())
setOutput('git-commit-short-sha', getGitCommitShortSHA())

setOutput('runner-uid', getRunnerUid())
setOutput('runner-user', getRunnerUser())

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map