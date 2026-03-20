// Shared animation constants for premium feel
export const easing = {
  smooth: [0.25, 0.1, 0.25, 1.0],
  entrance: [0.0, 0.0, 0.2, 1.0],
  exit: [0.4, 0.0, 1.0, 1.0],
};

export const spring = { type: "spring", stiffness: 300, damping: 30 };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing.entrance } }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: easing.entrance } }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easing.entrance } }
};

export const cardHover = {
  y: -4,
  transition: { duration: 0.2 }
};
