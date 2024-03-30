import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import technologyImages from './technologyImages';



const Slider = () => {
    const [width, setWidth] = useState(0);
    const [tech, setTech] = useState(technologyImages);

    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    })

  return (
    <motion.div 
        className="carousel"
        ref={carousel}
    >
        <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left:-width }} 
            className="inner-carousel"
        >
            {technologyImages.map((technologyImage) => {
                return(
                    <motion.div className="item" key={technologyImage.imgData}>
                        <img src={technologyImage.imgData} alt={technologyImage.altName} />
                        <span className="imgToolTilText">{technologyImage.altName}</span>
                    </motion.div>
                    
                );
            })}
            {technologyImages.map((technologyImage) => {
                return(
                    <motion.div className="item" key={technologyImage.imgData}>
                        <img classname="itemImage" src={technologyImage.imgData} alt={technologyImage.altName} />
                        <span className="imgToolTilText">{technologyImage.altName}</span>
                    </motion.div>
                    
                );
            })}
            {/* {technologyImages.map((technologyImage) => {
                return(
                    <motion.div className="item" key={technologyImage}>
                        <img src={technologyImage} alt="" />
                    </motion.div>
                    
                );
            })} */}
        </motion.div>
        
    </motion.div>
  )
}


export default Slider