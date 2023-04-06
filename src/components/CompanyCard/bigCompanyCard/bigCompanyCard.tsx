import styles from "./bigCompanyCard.module.css";
import Button from "@/components/button/buttonPrimary/button";
import {useRouter} from "next/router";
import {ICompany} from "@/interfaces/ICompany";

interface PropTypes {
    Company: ICompany
}

export default function BigCompanyCard({Company}: PropTypes){
    const router = useRouter()
    const { company } = router.query

    function startChallenge(){
        router.push(`/company/${company}/challenge`)
    }
    return(
        <div className={styles.bigCompanyCard}>
            <div className={styles.headerCard}>
                <h2 className={styles.title}>{Company.name}</h2>
            </div>
            <img className={styles.image} src={Company.imageUrl}/>
            <div className={styles.footerCard}>
                <p className={`${styles.description} ${styles.descriptionMargin}`}>{Company.description}</p>
                <Button onClick={startChallenge} text={"Go to challenge"} />
            </div>
        </div>
    )
}