import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedWrapper = ({ children }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 }, // Duración de la animación en milisegundos
  });

  return <animated.div style={props}>{children}</animated.div>;
};

export default AnimatedWrapper;