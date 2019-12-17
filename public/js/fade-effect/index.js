const animatedTags = Array.from(
    document.querySelectorAll("h1, p, h5, a, img, .cell")
  );
  
  // fade out on load
  animatedTags.forEach(tag => {
    tag.style.opacity = 0;
  });
  
  setTimeout(() => {
    animatedTags.forEach(tag => {
      tag.style.opacity = 1;
    });
  });
  
  const fadeIn = function() {
    // check the constant is there
    // console.log("fade in")
    // look through all the animated tags and see
    // with the getBoundingClientRect if it's in the window
  
    let delay = 0.15;
  
    animatedTags.forEach(tag => {
      // the () runs it
      const tagTop = tag.getBoundingClientRect().top;
      const tagBottom = tag.getBoundingClientRect().bottom;
  
      // console.log(tagTop, tagBottom)
      if (tagTop < window.innerHeight && tagBottom > 0) {
        // keep the s because we want it to be a second
        tag.style.animation = `fadeIn 1s ${delay}s both`;
        delay = delay + 0.15;
      } else {
        tag.style.opacity = 0;
        tag.style.animation = "";
      }
    });
  };
  
  // on load, run fadeIn
  fadeIn();
  
  // on scroll, run fadeIn
  document.addEventListener("scroll", function() {
    fadeIn();
  });
  
  // on browser resize, run fadeIn
  // because it's the browser, use window not document
  window.addEventListener("resize", function() {
    fadeIn();
  });
  