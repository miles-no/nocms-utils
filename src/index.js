/* eslint no-shadow: off */
/* eslint no-param-reassign: off */
/* eslint no-mixed-operators: off */
/* eslint no-unused-expressions: off */
const scrollTo = (element, to, duration, cb) => {
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

  const animateScroll = (elapsed) => {
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
      setTimeout(() => {
        animateScroll(elapsedTime);
      }, increment);
    } else {
      cb && cb();
    }
  };
  animateScroll(0);
};

const isBrowser = () => {
  return (typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement);
};

const urlify = (text) => {
  const replace = {
    '-': '-',
    ' ': '-',
    'æ': 'ae',
    'ø': 'oe',
    'å': 'aa',
  };

  return text.replace(/[^\w]/ig, chr => replace[chr] || '').toLowerCase();
};

module.exports = {
  scrollTo,
  isBrowser,
  urlify,
};
