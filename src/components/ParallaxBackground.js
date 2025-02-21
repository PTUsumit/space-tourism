"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ParallaxBackground() {
  return (
    <motion.div
      className="absolute inset-0 -z-10"
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2 }}
    >
      <Image
        src="/space-bg.jpg"
        alt="Space Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
  );
}
