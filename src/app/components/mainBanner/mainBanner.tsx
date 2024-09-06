"use client"
import Image from "next/image";
import styles from "./page.module.css";
import mainBanner from "./mainBanner.module.css";
import { useEffect, useRef } from "react";

export default function MainBanner() {
  return (
    <div className={mainBanner.mainBanner}>
      <div className={mainBanner.overlay}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="bannerContent">
                <div className={mainBanner.bannerHeader}>
                  <h2>Rapid & Deep</h2>
                  <h1>Maid Cleaning</h1>
                  <h1>Services</h1>
                  <h2>Northwestern Fairfax, VA</h2>
                  <button>Our Services</button>
                </div>
                <div className={mainBanner.bannerText}>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video autoPlay loop muted>
        <source src="/videos/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
