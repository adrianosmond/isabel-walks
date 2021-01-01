const easing = (t) => (t < 0.5 ? 2 * t * t : (-1 + (4 - 2 * t)) * t);

class ScrollTo {
  constructor() {
    this.currentValue = 0;
    this.difference = 0;
    this.finalValue = 0;
    this.duration = 500;
    this.now = 0;
    this.barToMove = null;
  }

  scrollTo(el, offset = 50) {
    this.currentValue = window.pageYOffset;
    this.scroll(el.getBoundingClientRect().top + this.currentValue - offset);
  }

  updateScrollPos() {
    let complete = false;
    let timeDiff = new Date().getTime() - this.now;
    if (timeDiff > this.duration) {
      timeDiff = this.duration;
      complete = true;
    }

    const easedValue = easing(timeDiff / this.duration) * this.difference;
    window.scrollTo(0, easedValue + this.currentValue);

    if (!complete) {
      requestAnimationFrame(this.updateScrollPos.bind(this));
    }
  }

  scroll(finalValue) {
    this.now = new Date().getTime();
    this.difference = finalValue - this.currentValue;
    requestAnimationFrame(this.updateScrollPos.bind(this));
  }

  scrollBar(el, to) {
    this.barToMove = el;
    this.currentValue = this.barToMove.scrollTop;
    this.scrollBarTo(to + this.currentValue);
  }

  updateScrollBarPos() {
    let complete = false;
    let timeDiff = new Date().getTime() - this.now;
    if (timeDiff > this.duration) {
      timeDiff = this.duration;
      complete = true;
    }

    const easedValue = easing(timeDiff / this.duration) * this.difference;
    this.barToMove.scrollTop = easedValue + this.currentValue;

    if (!complete) {
      requestAnimationFrame(this.updateScrollBarPos.bind(this));
    }
  }

  scrollBarTo(finalValue) {
    this.now = new Date().getTime();
    this.difference = finalValue - this.currentValue;
    requestAnimationFrame(this.updateScrollBarPos.bind(this));
  }
}

export default new ScrollTo();
