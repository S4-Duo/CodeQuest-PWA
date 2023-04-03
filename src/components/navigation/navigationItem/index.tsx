import styles from "./index.module.css"
import {useRouter} from "next/router";
import {func} from "prop-types";

interface Proptypes{
    title: string
    route: string
    image: any
}

export default function NavigationItem({title, route, image}: Proptypes){
    const router = useRouter()
    function navigate(){
        router.push(route)
    }

    return(
        <div className={styles.navigationItem} onClick={navigate}>
            <img className={styles.image} src={image} alt={"NavigationLogo"}/>
            <p>{title}</p>
        </div>
    )
}