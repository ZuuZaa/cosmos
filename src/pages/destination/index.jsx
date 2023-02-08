import { PageLayout } from "components/pageLayout";


export const Destination = () => {

  const pageDetails = { id: "destination-page", order: "01", text: "Pick your destination" }

  return (
    < PageLayout {...pageDetails} />
  )
}