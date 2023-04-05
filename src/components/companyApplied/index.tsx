import styles from "./appliedCompany.module.css";
import Button from "@/components/button/buttonPrimary/button";
import ButtonPrimary from "@/components/button/buttonPrimary/button";
import ButtonSecondary from "@/components/button/buttonSecondary/button";

enum status {
    open = "Open",
    closed = "Closed"
}

interface PropTypes {
    companyName: string
    shortDesc: string
    status: status
    date: Date
}

export default function CompanyApplied({companyName, shortDesc, status, date}: PropTypes) {
    return (
        <div className={styles.appliedContainer}>
            <div className={styles.appliedHeader}>
                <h2>{companyName}</h2>
                <p>{shortDesc}</p>

            </div>
            <img className={styles.appliedImage} src="/images/asml.png" alt=""/>
            <div className={styles.appliedBody}>
                <p>{`Status: ${status}`}</p>
                <p>{`Date applied: ${date.toDateString()}`}</p>
            </div>
            <div className={styles.appliedFooter}>
                <div className={styles.buttonContainer}>
                    <ButtonSecondary onClick={() => {}} text={"Delete apply"} />
                </div>
                <div className={`${styles.buttonContainer}, ${styles.secondButton}`}>
                    <ButtonPrimary onClick={() => {}} text={"Open details"} />
                </div>
            </div>
        </div>
    )
}