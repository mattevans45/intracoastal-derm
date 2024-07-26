export const containerVariants = {
    hidden: { y: 80 },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
       
      },
    },
  };
  
  export const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  
  export const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };