import React, { useEffect } from 'react'
import jsPreloader from "./jsPreloader.module.css";
import { setLoaderStatus, isLoaderDone } from './preloaderSlice';
import { useSelector, useDispatch } from 'react-redux';

const Preloader = () => {
    const loaderDone = useSelector(isLoaderDone);
    const dispatch = useDispatch();
    const handleLoaderStatus = (status: boolean) => {
        dispatch(setLoaderStatus(status));
    }
    useEffect(() => {
        setTimeout(() => {
            handleLoaderStatus(true);
        }, 700)
    });
    return (
        <div className={`${jsPreloader.jsPreloader} ${(loaderDone) ? jsPreloader.loaded : ""}`}>
            <div className={jsPreloader.preloaderInner}>
                <span className={jsPreloader.dot}></span>
                <div className={jsPreloader.dots}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Preloader