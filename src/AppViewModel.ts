import { debounce } from "lodash";
import tailwind from "./tailwind.config";

export class AppViewmodel {
  constructor() {}

  supportsPassive: boolean = false;
  wheelOpt = this.supportsPassive ? { passive: false } : false;
  wheelEvent: string =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  // Scrolling states
  wrapper: HTMLElement | null = null;
  scrollingHeight: number = 0;
  allowScrolling: boolean = true;
  currentSection: number = 0;
  duration: number = 1.5;

  rewriteDefaultScrolling(wrapper: HTMLElement, parent: HTMLDivElement) {
    // Init vars
    this.wrapper = wrapper;
    this.scrollingHeight = parent.clientHeight;
    const screens = tailwind.theme?.screens as any;
    const lgString = screens.lg?.replace("px", "") || 0;
    const lg = parseInt(lgString);

    // Set custom scrolling on desktop
    if (window.innerWidth > lg && window.innerHeight > 580) {
      this.addCustomScrolling();
    }

    // Handle scrolling on resize
    window.addEventListener(
      "resize",
      debounce(() => {
        this.scrollingHeight = parent.clientHeight;

        console.log("WINDOW INNER ", window.innerHeight);
        if (window.innerWidth > lg && window.innerHeight > 580) {
          this.currentSection = Math.round(
            wrapper.scrollTop / this.scrollingHeight,
          );

          wrapper.scrollTo(0, this.scrollingHeight * this.currentSection);

          this.addCustomScrolling();
        } else {
          this.removeCustomScrolling();
        }
      }, 300),
      false,
    );
  }

  addCustomScrolling = () => {
    if (!this.wrapper) return;

    this.wrapper.addEventListener(
      "DOMMouseScroll",
      this.handleScrolling,
      false,
    ); // older FF
    this.wrapper.addEventListener(
      this.wheelEvent,
      this.handleScrolling,
      this.wheelOpt,
    ); // modern desktop
    this.wrapper.addEventListener(
      "touchmove",
      this.handleScrolling,
      this.wheelOpt,
    ); // mobile
    this.wrapper.addEventListener(
      "keydown",
      this.preventDefaultForScrollKeys,
      false,
    );
  };

  removeCustomScrolling = () => {
    if (!this.wrapper) return;

    this.wrapper.removeEventListener(
      "DOMMouseScroll",
      this.handleScrolling,
      false,
    ); // older FF
    this.wrapper.removeEventListener(this.wheelEvent, this.handleScrolling); // modern desktop
    this.wrapper.removeEventListener("touchmove", this.handleScrolling); // mobile
    this.wrapper.removeEventListener(
      "keydown",
      this.preventDefaultForScrollKeys,
      false,
    );
  };

  handleScrolling = (e: any) => {
    e.preventDefault();

    if (this.allowScrolling) {
      this.allowScrolling = false;

      // Scroll up
      if (e.wheelDelta >= 0) {
        if (this.currentSection !== 0) {
          const nextSection = this.currentSection - 1;
          this.scrollTo(
            this.currentSection * this.scrollingHeight,
            nextSection * this.scrollingHeight,
            0,
          );
          this.currentSection = nextSection;
        } else {
          this.allowScrolling = true;
        }
      }

      // Scroll down
      else {
        const nextSection = this.currentSection + 1;
        this.scrollTo(
          this.currentSection * this.scrollingHeight,
          nextSection * this.scrollingHeight,
          0,
        );
        this.currentSection = nextSection;
      }

      // Reset scroll blocking
      setTimeout(() => {
        this.allowScrolling = true;
      }, this.duration * 1000);
    }
  };

  preventDefaultForScrollKeys(e: Event) {
    // @ts-ignore
    if (keys[e.keyCode]) {
      e.preventDefault();
      return false;
    }
  }

  scrollTo = (old: number, des: number, actual: number) => {
    if (!this.wrapper) return;

    let delta = des - old;

    actual += this.duration;
    delta *= actual / 100;
    delta += old;

    this.wrapper.scrollTo(0, delta);

    if (actual < 100) {
      window.requestAnimationFrame(() => {
        this.scrollTo(old, des, actual);
      });
    }
  };

  scrollToSpecifiedScreen = (index: number) => {
    this.scrollTo(
      this.currentSection * this.scrollingHeight,
      index * this.scrollingHeight,
      0,
    );
    this.currentSection = index;
  };
}
