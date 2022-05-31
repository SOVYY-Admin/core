import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from "./drawer.module.css";
// import components
import { IconButton, Backdrop, Stack, Divider } from '../components';
// import animation
import { motion, AnimatePresence } from 'framer-motion';

 export const Drawer = ({children, styling, ...props }) => {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen);
  
  return (
    <div className={`${styling}`}>
    <IconButton color="neutral" variant="ghost" icon="menu" onClick={toggleDrawer}/>
    <motion.div className={`
    ${styles[`sy--drawer`]}`}
    animate={drawerIsOpen ? "B" : "A"} 
    variants={variants} 
    transition={{ type: "tween" }} 
    initial="A"
    >
      <Stack orientation="vertical" gap="0">
        <div className='flex w-full p-6'>
         <IconButton color="neutral" variant="ghost" icon="x" onClick={toggleDrawer} styling="ml-auto"/>
        </div>
        <Divider orientation="vertical"/>
        <div className='w-full p-6'>
        {children}
        </div>
      </Stack>
    </motion.div>
    <AnimatePresence>
      <motion.div onClick={toggleDrawer} animate={drawerIsOpen ? "B" : "A"} variants={overlay} initial="A" exit="A">
        {drawerIsOpen && <Backdrop styling="fixed cursor-pointer z-20" />}
      </motion.div>
    </AnimatePresence>
    </div>
  );
};

Drawer.propTypes = {
  styling: PropTypes.string,
};

Drawer.defaultProps = {
  styling: '',
};

// animation variants
const variants = {
  A: { x: "100%" },
  B: { x: 0 },
}
const overlay = {
  A: { opacity: 0 },
  B: { opacity: 1 },
}
