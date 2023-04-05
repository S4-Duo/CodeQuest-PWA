import styles from "./index.module.css"
import {useRouter} from "next/router";
import {func} from "prop-types";

interface Proptypes{
    title: String,
    description: String,
    image: any
}

export default function SmallCompanyCard({title, description, image}: Proptypes){
    const router = useRouter()

    function goToCompanyDetail(){
        router.push(`/company/${title}/detail`)
    }

    return(
        <div className={styles.smallCompanyCard} onClick={goToCompanyDetail}>
            <h4 className={styles.cardTitle}>{title}</h4>
            <p className={styles.cardDescription}>{description}</p>
            <img src={image} className={styles.image}/>
        </div>
    )
}