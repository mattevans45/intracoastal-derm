// public/googleAnalytics.js
(function() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-3KZ9KSZBTF';
    document.head.appendChild(script);
  
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-3KZ9KSZBTF');
  })();
  