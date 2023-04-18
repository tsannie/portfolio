const options = {
  fpsLimit: 60,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#f2f2f2",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#f2f2f2",
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
    },
  },
  background: {
    color: "#0D0D0D",
  },
  retina_detect: false,
  detectRetina: false,
};

export default options;
