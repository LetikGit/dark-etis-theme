// ==UserScript==
// @name         dark-etis
// @namespace    https://github.com/itxtools/dark-etis-theme
// @updateURL    https://github.com/itxtools/dark-etis-theme/raw/master/other-dark-etis.user.js
// @downloadURL  https://github.com/itxtools/dark-etis-theme/raw/master/other-dark-etis.user.js
// @supportURL   https://github.com/itxtools/dark-etis-theme/issues
// @require       https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @version      1.0.1
// @description  My eyes hurts, when the brightness comes
// @author       itxtools
// @licence      MIT
// @match        https://student.psu.ru/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`

    html {
          //background-color: #0e0e0e !important;
          background-color: #151515 !important;
    }
    body, iframe {
      background-color:transparent!important;
      background:transparent!important;
      background-image:none!important;
    }
    body, iframe {
      filter: invert(0.91) hue-rotate(180deg) !important;
    }
    .teacher_photo {
      background-color: #2324251f;
    }
    .teacher_photo img {
      border: 6px solid #252525;
    }
    .need_redirect {
      background-color: #e1f1ff !important;
      color: #000000 !important;
    }
    .btn-dark {
      background-color: #e1f1ff !important;
      color: #000000 !important;
    }
    .common tr:hover {
      background-color: #E6E6E6;
    }

    a {
     text-decoration: none !important;
   }
    :not(object):not(body)>embed, img, video, figure:empty, *[data-img], *[data-thumb-url], *[style*='background:url']:not(input), *[style*='background: url']:not(input), *[style*='background-image:url']:not(input), *[style*='background-image: url']:not(input) {
      filter: invert(1) hue-rotate(180deg) !important;
    }
    [style*='background:url'] *, [style*='background-image:url'] *, [style*='background: url'] *, [style*='background-image: url'] *, input, [background] * {
      filter: none !important;
    }
    :-webkit-full-screen, :-webkit-full-screen * {
      filter: none !important;
    }
`)

var $ = window.jQuery;
$(document).ready(function() {
  $('a[href="stu.fcl_choice"]').addClass('btn-dark');
});
