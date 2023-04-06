import styles from "./index.module.css"
import {useRouter} from "next/router";
import JSONCompanies from "@/storage/companies.json"
import {useEffect, useState} from "react";
import {ICompanie} from "@/interfaces/ICompany";

interface Proptypes{
    company: ICompanie
}

export default function SmallCompanyCard({company}: Proptypes){
    const router = useRouter()

    function goToCompanyDetail(){
        router.push(`/company/${company.guid}/detail`)
    }

    return(
        <div className={styles.smallCompanyCard} onClick={goToCompanyDetail}>
            <h4 className={styles.cardTitle}>{company.name}</h4>
            <p className={styles.cardDescription}>{company.description}</p>
            <img src={company.imageUrl} className={styles.image}/>
        </div>
    )
}