// forked from https://github.com/bahmutov/code-snippets/blob/master/local-storage-size.js
// based on answer to question
// http://stackoverflow.com/questions/4391575/how-to-find-the-size-of-localstorage
(() => {
  const stringSizeBytes = str => str.length * 2;

  const toMB = bytes => bytes / 1024 / 1024;

  const toSize = key => ({
    name: key,
    size: stringSizeBytes(localStorage[key])
  });

  const toSizeMB = info => {
    info.size = `${toMB(info.size).toFixed(2)} MB`;
    return info;
  };

  const sizes = Object.keys(localStorage).map(toSize).map(toSizeMB);

  console.table(sizes);
}());
