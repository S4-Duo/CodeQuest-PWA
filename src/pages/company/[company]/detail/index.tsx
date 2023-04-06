import BigCompanyCard from "@/components/CompanyCard/bigCompanyCard/bigCompanyCard";
import styles from "./index.module.css"
import SmallTitle from "@/components/SmallTitle";
import Navigation from "@/components/navigation";
import {useEffect, useState} from "react";
import {ICompanie} from "@/interfaces/ICompany";
import JSONCompanies from "@/storage/companies.json";

interface PropTypes {
    wholeCompany: ICompanie

}
export async function getServerSideProps(context: any) {
    const { company } = context.query
    const wholeCompany: ICompanie | undefined = JSONCompanies.companies.find(newCompany => newCompany.guid === company)
    return {
        props: {
            wholeCompany
        },
    }
}
export default function CompanyDetail({wholeCompany}: PropTypes) {
    console.log(wholeCompany)

    return (
        <div className={styles.companyDetailPage}>
            <SmallTitle/>
            <BigCompanyCard Company={wholeCompany}/>
            <Navigation/>
        </div>
    )
}