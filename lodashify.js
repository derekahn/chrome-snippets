(() => {
  if (typeof _ === 'undefined') {
    const s = document.createElement('script');
    s.setAttribute('src', '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js');
    s.addEventListener('load', () => {
      console.log('Lodash 🔧  loaded');
    });
    document.body.appendChild(s);
  }
})();
