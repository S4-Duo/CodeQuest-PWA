import FilterItem from "@/components/filter/filterItem";
import styles from "./index.module.css"

export default function FilterWrapper(){
    return(
        <div className={styles.filterWrapper}>
            <FilterItem filter={"Price"}/>
            <FilterItem filter={"Ratings"}/>
            <FilterItem filter={"Ratings"}/>
        </div>
    )
}