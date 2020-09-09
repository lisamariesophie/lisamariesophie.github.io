window.cookieconsent.initialise({
    container: document.getElementById("cookieconsent"),
    palette:{
     popup: {background: "#E31B6D"},
     button: {background: "#f5f5f5"},
    },
    revokable: true,
    onStatusChange: function(status) {
     console.log(this.hasConsented() ?
      'enable cookies' : 'disable cookies');
    },
    "position": "bottom-right",
    "theme": "classic",
    "domain": "https://lisamariesophie.github.io/",
    "secure": true,
    "content": {
      "header": 'Cookies used on the website!',
      "message": 'This website uses cookies to improve your experience.',
      "dismiss": 'Got it!',
      "allow": 'Allow cookies',
      "deny": 'Decline',
      "link": 'Learn more',
      "href": 'https://lisamariesophie.github.io/dsgvo.html',
      "close": '&#x274c;',
      "policy": 'Cookie Policy',
      "target": '_blank',
      }
   });