'use client'
//Packages
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
//Components
import styles from './Wrapper.module.scss'
import AsideMenu from '../Components/AsideMenu/AsideMenu';
import Header from '../Components/Header/Header';

interface Props {
    children?: ReactNode;
}

const Wrapper = ({ children }: Props) => {
    return (
        <RecoilRoot>
            <div className={styles.container}>
                <AsideMenu />
                <div className={styles.content}>
                    <Header />
                    {children}
                </div>


            </div>
        </RecoilRoot>
    )
}

export default Wrapper;