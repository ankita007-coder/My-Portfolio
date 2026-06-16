import { motion,useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Card({ card, index, total }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const TOP_OFFSET = 80; // base top
  const STACK_OFFSET = 30; // each card peeks this much below the previous

  return (
    <motion.div
      ref={cardRef}
      className="about-card"
      style={{
        scale,
        top: TOP_OFFSET + index * STACK_OFFSET,
        zIndex: index + 1,
      }}
    >
      <p>{card.text}</p>
    </motion.div>
  );
}