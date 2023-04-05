import styles from "./bigCompanyCard.module.css";
import Button from "@/components/button/buttonPrimary/button";
import {useRouter} from "next/router";

interface PropTypes {
    name: string | undefined,
    shortDesc: string,
    image: string,
    longDesc: string
}

export default function BigCompanyCard({name, shortDesc, image, longDesc}: PropTypes){
    const router = useRouter()
    const { company } = router.query

    function startChallenge(){
        router.push(`/company/${company}/challenge`)
    }
    return(
        <div className={styles.bigCompanyCard}>
            <div className={styles.headerCard}>
                <h2 className={styles.title}>{name}</h2>
                <p className={styles.description}>{shortDesc}</p>
            </div>
            <img className={styles.image} src={image}/>
            <div className={styles.footerCard}>
                <p className={`${styles.description} ${styles.descriptionMargin}`}>{longDesc}</p>
                <Button onClick={startChallenge} text={"Go to challenge"} />
            </div>
        </div>
    )
}