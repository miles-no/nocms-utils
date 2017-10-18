'use strict';

/* eslint no-shadow: off */
/* eslint no-param-reassign: off */
/* eslint no-mixed-operators: off */
/* eslint no-unused-expressions: off */
var scrollTo = function scrollTo(element, to, duration, cb) {
  var start = element.scrollTop;
  var change = to - start;
  var increment = 40;
  var easeInOut = function easeInOut(currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
      return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
  };

  var animateScroll = function animateScroll(elapsed) {
    var elapsedTime = elapsed + increment;
    var position = easeInOut(elapsedTime, start, change, duration);

    if (element.nodeName === 'BODY') {
      document.body.scrollTop = position;
      if (document.documentElement) {
        document.documentElement.scrollTop = position;
      }
    } else {
      element.scrollTop = position;
    }

    if (elapsedTime < duration) {
      setTimeout(function () {
        animateScroll(elapsedTime);
      }, increment);
    } else {
      cb && cb();
    }
  };
  animateScroll(0);
};

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined' && window.document && window.document.createElement;
};

module.exports = {
  scrollTo: scrollTo,
  isBrowser: isBrowser
};
//# sourceMappingURL=index.js.map