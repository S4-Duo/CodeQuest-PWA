import styles from "./index.module.css"

interface Proptypes{
    title: String,
    description: String,
    image: any
}

export default function SmallCompanyCard({title, description, image}: Proptypes){
    return(
        <div className={styles.smallCompanyCard}>
            <h4 className={styles.cardTitle}>{title}</h4>
            <p className={styles.cardDescription}>{description}</p>
            <img src={image} className={styles.image}/>
        </div>
    )
}