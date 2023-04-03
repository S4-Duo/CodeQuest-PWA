import styles from "./index.module.css"
import {useState} from "react";

interface Proptypes {
    filter: string
}
export default function FilterItem({filter}: Proptypes){
    const [active, setActive] = useState<boolean>()

    return(
        <div className={`${styles.filterItem} ${active ? styles.active : ''}`} onClick={() => {setActive(!active)}}>
            <p>
                {filter}
            </p>
        </div>
    )

}