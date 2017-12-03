/*
Forked from https://github.com/bahmutov/code-snippets/blob/master/remove-all-but.js
Removes all elements except for the trees rooted
in the given selectors. Selectors are queried using querySelectorAll

For example, given a document

body
  div.foo
    span
  div#bar
    div#baz
      hello

and command with selectors ('.foo', '#baz') will leave
everything in place, but command ('#baz') will leave just

body
  div#bar
    div#baz
      hello
*/
const ELEMENTS = ['article', 'img', '.foo'];

((...args) => {
  const selectors = Array.from(args);
  if (!selectors.length) {
    throw new Error('Need at least one selector to leave');
  }

  const keep = selectors.reduce((all, selector) =>
    all.concat(Array.from(document.querySelectorAll(selector)))
  , []);

  const shouldKeep = el => keep.some(keepElement =>
    keepElement.contains(el) || el.contains(keepElement)
  );

  const all = Array.from(document.body.querySelectorAll('*'));

  const removed = all.reduce((sum, el) => {
    if (!shouldKeep(el)) {
      el.parentNode.removeChild(el);
      sum += 1;
    }
    return sum;
  }, 0);

  console.log('removed %d elements', removed);
})(ELEMENTS);
