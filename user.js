// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://novosibirsk.hh.ru/search/vacancy?text=&salary=&area=4&ored_clusters=true
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hh.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    var AutoClickWork = function() {
      for( var i = 0; i < document.getElementsByClassName("serp-item-controls").length; i++) { var but = document.getElementsByClassName("serp-item-controls")[i].children[0].click() }
    };
    var AutoReloadPage = function() {
      document.getElementsByClassName("supernova-search-submit-text")[0].click();
    };
    setTimeout(AutoReloadPage, 25000);
    setTimeout(AutoClickWork, 3000);
})();
