import React from 'react';
import { motion } from 'framer-motion';

export const Slideup = ({ children, delay = 0, className = '' }) => (
	<motion.div
		initial={{ opacity: 0, y: 100 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 1, delay }}
		className={className}
	>
		{children}
	</motion.div>
);