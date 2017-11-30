// forked from https://raw.githubusercontent.com/bahmutov/code-snippets/master/github-pull-request-template.js
// Works with Github and Gitlab
(() => {
  let textarea = ['.note-textarea', '#pull_request_body'].map(selector => document.querySelector(selector)).filter(elem => elem).pop();
  let template = '';
  let firstLine;

  template += firstLine = 'ID (ticket/card/issue): ';
  template += '\n\n';
  template += '## Task/Problem\n\n';
  template += '## Solution\n\n';
  template += '## Steps to reproduce\n\n';
  template += '## UAT\n\n';
  template += '## Code review\n\n\n';
  template += '- [ ] Unit tests passed\n';
  template += '- [ ] System tests passed\n';

  if (textarea) {
    textarea.value = template;
    textarea.focus();
    textarea.scrollTop = 0;
    textarea.selectionStart = textarea.selectionEnd = firstLine.length;
  } else {
    /* global alert */
    /* eslint no-alert:0 */
    alert('You are either not on the PR page or there is no ' + textareaId + ' element.');
  }
})();
