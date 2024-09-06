"use client"
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faCalendar, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import headerArea from "./headerArea.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLoaderStatus, isLoaderDone, isSticky } from './headerSlice';
import Image from 'next/image';
import Menu from "../menu/menu"
import logo from "../../../../public/images/logo.png";
import Preloader from './preloader/preloader'
const Header = ({menuItems}) => {
  // const loaderDone = useSelector(isLoaderDone);
  // const sticky = useSelector(isSticky);
  // const dispatch = useDispatch();
  // const handleLoaderStatus = (status: boolean) => {
  //   dispatch(setLoaderStatus(status));
  // }
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleLoaderStatus(true);
  //   }, 700)
  // });

  return (
    <>
      <Preloader/>
      <div className={headerArea.subHeader}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8">
              <div className={headerArea.headerInfo}>
                <div><FontAwesomeIcon icon={faEnvelope} className="fa-fw" /> info@company.com</div>
                <div><FontAwesomeIcon icon={faMap} className="fa-fw" /> Sunny Isles Beach, FL 33160</div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-4">
            <div className={headerArea.socialLinks}>
              <div><a href="#"><FontAwesomeIcon icon={faEnvelope} className="fa-fw" /></a></div>
              <div><a href="#"><FontAwesomeIcon icon={faTwitter} className="fa-fw" /></a></div>
              <div><a href="#"><FontAwesomeIcon icon={faLinkedin} className="fa-fw" /></a></div>
              <div><a href="#"><FontAwesomeIcon icon={faInstagram} className="fa-fw" /></a></div>
            </div>
          </div> */}
          </div>
        </div>
      </div>

      <header className={`${headerArea.headerArea} ${headerArea.headerSticky}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-12">
              <a href="#" className={headerArea.logo}>
                <Image src={logo} alt='rush and clean maid service logo'></Image>
              </a>
            </div>
            <Menu items={menuItems}/>



          </div>
        </div>
      </header>

    </>
  )
}

export default Header