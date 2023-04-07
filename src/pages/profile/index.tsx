import Navigation from "@/components/navigation";
import SmallTitle from "@/components/SmallTitle";
import styles from "./profile.module.css"
import {useSession, signOut} from "next-auth/react";
import {useEffect} from "react";
import SmallCompanyCard from "@/components/CompanyCard/SmallCompanyCard";
import Github from "next-auth/providers/github";

export default function ProfilePage(){
    const { data: session } = useSession()

    useEffect(() => {
        console.log(session)
    })

    return (
        <div className={styles.profilePage}>
            <SmallTitle arrow={true}/>
            <img className={styles.userImage} src={session?.user?.image!} alt="Profile image"/>
            <h2 className={styles.userName}>{session?.user?.name}</h2>
            <p className={styles.userDescription}>Fontys</p>
            <p className={`${styles.userDescription}, ${styles.secondDescription}`}>Software developer</p>

            <SmallCompanyCard title={"Github"} link={"https://github.com/RenoMuijsenberg"} description={"To view all my code projects"} image={"/images/social/Github.png"} />
            <SmallCompanyCard title={"Facebook"} link={"https://facebook.com/RenoMuijsenberg"} description={"To connect with friends"} image={"/images/social/Facebook.svg"} />
            <SmallCompanyCard title={"LinkedIn"} link={"https://www.linkedin.com/in/reno-muijsenberg-6b01a0230/"} description={"To connect with employers"} image={"/images/social/LinkedIn.svg"} />

            <p className={styles.signOut} onClick={() => signOut()}>Sing Out</p>
            <Navigation/>
        </div>
    )
}