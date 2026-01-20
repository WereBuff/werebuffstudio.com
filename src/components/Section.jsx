import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Section = ({ children, className = '', id = '', snap = true }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.section
            ref={ref}
            id={id}
            className={`${snap ? 'snap-section' : ''} ${className}`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.section>
    );
};

export default Section;
