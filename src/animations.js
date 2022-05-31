export const variants = {
    visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', duration: 1, ease: "easeIn" } },
    hidden: { opacity: 0, transition: { type: 'spring', duration: 2, ease: "easeOut" } },
    fadeIn: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', duration: 1, ease: "easeIn" } },
    fadeOut: { opacity: 0, transition: { type: 'spring', duration: 1, ease: "easeOut" } },
    fadeOutLeft: { opacity: 0, x: -200, transition: { type: 'spring', duration: 1, ease: "easeOut" } },
    fadeOutRight: { opacity: 0, x: 200, transition: { type: 'spring', duration: 1, ease: "easeOut" } },
    fadeOutTop: { opacity: 0, y: "-100%", transition: { type: 'spring', duration: 1, ease: "easeOut" } },
    fadeOutBottom: { opacity: 0, y: "100%", transition: { type: 'spring', duration: 1, ease: "easeOut" } },
}