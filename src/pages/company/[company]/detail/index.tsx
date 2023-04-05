import BigCompanyCard from "@/components/CompanyCard/bigCompanyCard/bigCompanyCard";
import styles from "./index.module.css"
import SmallTitle from "@/components/SmallTitle";
import Navigation from "@/components/navigation";

interface PropTypes {
    company: string | undefined

}
export async function getServerSideProps(context: any) {
    const { company } = context.query
    return {
        props: {
            company
        },
    }
}
export default function CompanyDetail({company}: PropTypes) {

    return (
        <div className={styles.companyDetailPage}>
            <SmallTitle/>
            <BigCompanyCard name={company?.toString()} shortDesc={"A company that sells ships"} image={"/images/asml.png"} longDesc={"In fact, we’re probably a part of the electronic device you’re using right now. Our lithography technology is fundamental to mass producing semiconductor chips. With it, the world’s top chipmakers are creating microchips that are more powerful, faster and energy efficient."} />
            <Navigation/>
        </div>
    )
}