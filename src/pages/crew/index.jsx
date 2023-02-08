import { PageLayout } from "components/pageLayout";


export const Crew = () => {

  const pageDetails = { id: "crew-page", order: "02", text: "Meet your crew" }

  return (
    < PageLayout {...pageDetails} />
  )
}