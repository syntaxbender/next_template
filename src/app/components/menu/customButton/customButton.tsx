import Link from "next/link"
import customButton from "./customButton.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
const CustomButton = () => {
    return (
      <div className={customButton.customButton}>
        <div className={customButton.button}>
          <Link href="#"><FontAwesomeIcon icon={faCalendarDays} className="fa-fw" />Book Online</Link>
        </div>
      </div>
    )
  } 
export default CustomButton;