"use client";
import BasicForm from "@/components/BasicForm";
import Counter from "@/components/Counter";
import { Variants, motion } from "framer-motion";

const BoilerplateTextVariants: Variants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function Home() {
  return (
    <motion.main
      className="flex h-screen w-screen flex-col items-center justify-center gap-4"
      variants={BoilerplateTextVariants}
      initial="hidden"
      animate="visible"
    >
      <p className="text-2xl font-semibold">🚀 Baptiste LECHAT Boilerplate</p>
      <Counter />
      <div className="w-1/4">
        <BasicForm />
      </div>
    </motion.main>
  );
}
