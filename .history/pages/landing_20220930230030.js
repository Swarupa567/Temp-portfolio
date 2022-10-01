import React from 'react';
import Image from 'next/image';
import styles from "../styles/Home.modules.css";

function Landing(){
    
    return(
        <div className={styles.landing}>
            <Image 
              src="/laptop.jpg"
              alt="laptop logo"
              width={200}
              height={200}
              />
            <h1>Swarupap.in</h1>
            <p>The website is being updated</p>
        </div>
    )
}

export default Landing;