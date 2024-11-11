import { motion, useMotionValue } from 'framer-motion';

function MyComponent() {
  const x = useMotionValue(0); // Create a MotionValue with an initial value of 0

  return (
    <motion.div style={{ x }}> {/* Set the MotionValue as the style */}
      {/* Content */}
    </motion.div>
  );
}
