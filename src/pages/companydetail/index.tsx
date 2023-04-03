import BigCompanyCard from "@/components/CompanyCard/bigCompanyCard/bigCompanyCard";
import styles from "./index.module.css"
import SmallTitle from "@/components/SmallTitle";
import Navigation from "@/components/navigation";
export default function CompanyDetail() {
    return (
        <div className={styles.companyDetailPage}>
            <SmallTitle/>
            <BigCompanyCard name={"ASML"} shortDesc={"A company that sells ships"} image={"/images/asml.png"} longDesc={"In fact, we’re probably a part of the electronic device you’re using right now. Our lithography technology is fundamental to mass producing semiconductor chips. With it, the world’s top chipmakers are creating microchips that are more powerful, faster and energy efficient."} />
            <Navigation/>
        </div>
    )
}