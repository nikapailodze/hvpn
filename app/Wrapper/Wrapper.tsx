'use client'
import { ReactNode } from 'react';
import styles from './Wrapper.module.scss'
import AsideMenu from '../Components/AsideMenu/AsideMenu';
import Header from '../Components/Header/Header';

interface Props{
    children?:ReactNode;
}

const Wrapper = ({children}:Props)=>{
    return(
        <div className={styles.container}>
            <AsideMenu/>
            <div className={styles.content}>
                <Header/>
                {children}
            </div>


        </div>
    )
}

export default Wrapper;