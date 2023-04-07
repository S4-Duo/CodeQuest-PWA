import styles from "./index.module.css"
import {useRouter} from "next/router";
import {useEffect} from "react";

interface PropTypes {
    arrow: boolean
}

export default function SmallTitle({arrow}: PropTypes){
    const router = useRouter()

    function navigateBack(): void {
        router.isReady && router.back()
    }


    return(
        <div className={styles.container} onClick={navigateBack}>
            {
                arrow && <img className={styles.arrowBack} src="/images/icons/arrow-back.svg" alt="arrow back"/>
            }
            <h2 className={styles.smallTitle}>CodeQuest</h2>
        </div>
    )

}