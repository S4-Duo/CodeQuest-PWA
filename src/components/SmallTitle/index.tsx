import styles from "./index.module.css"
import {useRouter} from "next/router";
import {useEffect} from "react";
import Image from "next/image";

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
                arrow && <Image width={60} height={60} className={styles.arrowBack} src="/images/icons/arrow-back.svg" alt="arrow back"/>
            }
            <h2 className={styles.smallTitle}>CodeQuest</h2>
        </div>
    )

}