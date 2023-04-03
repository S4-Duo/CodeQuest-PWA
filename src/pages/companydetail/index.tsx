import BigCompanyCard from "@/components/CompanyCard/bigCompanyCard/bigCompanyCard";

export default function CompanyDetail() {
    return (
        <div>
            <BigCompanyCard name={"ASML"} shortDesc={"A company that sells ships"} image={"/images/asml.png"} longDesc={"In fact, we’re probably a part of the electronic device you’re using right now. Our lithography technology is fundamental to mass producing semiconductor chips. With it, the world’s top chipmakers are creating microchips that are more powerful, faster and energy efficient."} />
        </div>
    )
}