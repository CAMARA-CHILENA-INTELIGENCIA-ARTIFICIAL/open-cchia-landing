'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const MOTION = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  blockquote: motion.blockquote,
} as const;

type Tag = keyof typeof MOTION;

export default function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
  ...rest
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
  [key: string]: unknown;
}) {
  const reduce = useReducedMotion();
  const MotionTag = MOTION[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px', amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
