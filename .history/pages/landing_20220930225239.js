import React from 'react';
import Image from 'next/image'
 
function Landing(){
    
    return(
        <div className={styles.landing}>
            <Image 
              src="/laptop.jpg"
              alt="laptop logo"/>
            <h1>Swarupap.in</h1>
            <p>The website is being updated</p>
        </div>
    )
}

export default Landing;