"use client"
import Image from "next/image";
import styles from "./page.module.css";
import mainBanner from "./mainBanner.module.css";
import { useEffect, useRef } from "react";
import MainBanner from "./components/mainBanner/mainBanner";
export default function Home() {
  return (
    <MainBanner/>
  );
}
