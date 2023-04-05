import CompanyApplied from "@/components/companyApplied";

enum status {
    open = "Open",
    closed = "Closed"
}

export default function Index() {
    return (
      <div>
        <CompanyApplied companyName={"ASML"} shortDesc={"A company with ships"} status={status.open} date={new Date()}/>
      </div>
    );
}