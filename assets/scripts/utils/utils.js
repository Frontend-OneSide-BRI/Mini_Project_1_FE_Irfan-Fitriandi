class DOMUtils {
  static find(el) {
    return document.querySelector(el);
  }

  static findAll(els) {
    return document.querySelectorAll(els);
  }
}

class URLUtils {
  static isActivePage(path) {
    return location.pathname.includes(path);
  }
}

export { DOMUtils, URLUtils };
