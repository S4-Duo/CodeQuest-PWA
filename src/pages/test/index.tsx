import CompanyApplied from "@/components/companyApplied";
import AcceptedMeetingCard from "@/components/acceptedMeetingCard/acceptedMeetingCard";

enum status {
    open = "Open",
    closed = "Closed"
}

export default function Index() {
    return (
      <div>
        <CompanyApplied companyName={"ASML"} shortDesc={"A company with ships"} status={status.open} date={new Date()}/>
        <AcceptedMeetingCard date={new Date()}/>
      </div>
    );
}