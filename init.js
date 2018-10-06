"use strict";

(function() {

    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

    if(isIE11) {
        window.onload = function() {
            const babelStandalone = document.createElement('script');
            babelStandalone.setAttribute('src', 'https://unpkg.com/babel-standalone@6/babel.min.js');
            const scripts = document.querySelectorAll('head script');
            document.querySelector('body').appendChild(babelStandalone)
            for(var key in scripts) {
                if(!isNaN(key) && !scripts[key].classList.contains('here')) {
                    var script = scripts[key];

                    script.parentElement.removeChild(script);

                    script.setAttribute('type', 'text/babel');
                    document.querySelector('body').appendChild(script);
                }
            }
        }
    }
})()

