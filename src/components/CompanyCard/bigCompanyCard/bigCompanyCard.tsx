import styles from "./bigCompanyCard.module.css";
import Button from "@/components/button/buttonPrimary/button";

interface PropTypes {
    name: string,
    shortDesc: string,
    image: string,
    longDesc: string
}

export default function BigCompanyCard({name, shortDesc, image, longDesc}: PropTypes){
    return(
        <div className={styles.bigCompanyCard}>
            <div className={styles.headerCard}>
                <h2 className={styles.title}>{name}</h2>
                <p className={styles.description}>{shortDesc}</p>
            </div>
            <img className={styles.image} src={image}/>
            <div className={styles.footerCard}>
                <p className={`${styles.description} ${styles.descriptionMargin}`}>{longDesc}</p>
                <Button onClick={() => {}} text={"Start challenge"} />
            </div>
        </div>
    )
}