scrollTo: function (element, to, duration, cb) {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 40;
  const easeInOut = function (currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
      return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
  };

  const animateScroll = function (elapsed) {
    const elapsedTime = elapsed + increment;
    const position = easeInOut(elapsedTime, start, change, duration);

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
}

module.exports = {
  scrollTo,
}
