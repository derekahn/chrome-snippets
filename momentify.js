(() => {
  if (typeof moment === 'undefined') {
    const s = document.createElement('script');
    s.setAttribute('src', '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.2/moment.js');
    s.addEventListener('load', () => {
      console.log('Moment.js 🕙  loaded');
    });
    document.body.appendChild(s);
  }
})();
