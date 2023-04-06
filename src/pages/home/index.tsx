import styles from "./index.module.css"
import SmallTitle from "@/components/SmallTitle";
import SmallCompanyCard from "@/components/CompanyCard/SmallCompanyCard";
import Input from "@/components/input/input";
import FilterWrapper from "@/components/filter/filterWrapper";
import Navigation from "@/components/navigation";
import JSONCompanies  from "@/storage/companies.json"
import {useEffect, useState} from "react";
import {ICompany} from "@/interfaces/ICompany";
export default function Home() {
    const [companies, setCompanies] = useState<ICompany[]>()
    const [errorMessage, setErrorMessage] = useState<string>()

    useEffect(() => {
        if (JSONCompanies.companies.length < 1){
            setErrorMessage("No companies with jobs find, try another time")
        } else {
            setCompanies(JSONCompanies.companies)
        }
    }, [])

    return (
        <div className={styles.homepage}>
            <SmallTitle/>
            <Input placeholder={"Find companies"} type={"text"}/>
            <FilterWrapper/>
            <div className={styles.companiesWrapper}>
                {
                    companies?.map((company: ICompany, key) => {
                        return (
                            <SmallCompanyCard key={key} title={company.name} link={`/company/${company.guid}/detail`} description={company.description} image={company.imageUrl}/>
                        )
                    })
                }
            </div>
            <Navigation/>
        </div>
    )
}