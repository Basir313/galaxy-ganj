import "aos/dist/aos.css";

import AOS from "aos";

export default ({ app }) => {
  app.AOS = new AOS.init({});
  // disable: window.innerWidth < 640,
  // // offset: 200,
  // duration: 600,
  // easing: 'ease-in-out-cubic',
  // once: true // or any other options you need
};
