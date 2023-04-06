import styles from "./index.module.css"
import {useRouter} from "next/router";

interface Proptypes{
    title: String,
    description: String,
    image: any,
    link: String
}

export default function SmallCompanyCard({title, description, image, link}: Proptypes){
    const router = useRouter()

    function goToCompanyDetail(){
        router.push(`${link}`)
    }

    return(
        <div className={styles.smallCompanyCard} onClick={goToCompanyDetail}>
            <h4 className={styles.cardTitle}>{title}</h4>
            <p className={styles.cardDescription}>{description}</p>
            <img src={image} className={styles.image}/>
        </div>
    )
}