import { ContactInformation } from "./ContactInformation"
import { NoContactSelected } from "./NoContactSelected"
// import { ContactInformationSkeleton } from "./ContactInformationSkeleton"

export const ContactInformationCard = () => {
  // return <ContactInformationSkeleton />
  return <NoContactSelected />
  return <ContactInformation />
}
