import { Variants } from "framer-motion";

export const ActionVariants: Variants = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};
