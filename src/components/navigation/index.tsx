import styles from "./index.module.css"
import NavigationItem from "@/components/navigation/navigationItem";
export default function Navigation(){
    return(
        <div className={styles.bottomNavigation}>
            <NavigationItem title={"Jobs"} route={"/home"} image={"/images/navigation/JobsIcon.svg"}/>
            <NavigationItem title={"Applied"} route={"/applied"} image={"/images/navigation/AppliedIcon.svg"}/>
            <NavigationItem title={"Profile"} route={"/profile"} image={"/images/navigation/ProfileIcon.svg"}/>
        </div>
    )

}