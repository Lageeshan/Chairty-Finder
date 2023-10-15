import { MappedResponse, RawResponse, Project, CountryArray } from "../../../types/types";

export function nextCharitiesMapper(resData: RawResponse): MappedResponse {
  console.log(resData)
  const { hasNext, nextProjectId, numberFound, project } = resData.data.projects
  return {
    hasNext: hasNext,
    nextId: nextProjectId,
    totalNumberOfCharities: numberFound,
    projects: project ? project.map((item: Project) => {
      const { id, title, country, imageLink, contactUrl, projectLink, organization: { countries: { country: organizationCountries } }, organization: { country: addressCountry, city: addressCity, addressLine1, addressLine2 } } = item
      return {
        id: id,
        title: title,
        country: country,
        organizationCountries: organizationCountries ? organizationCountries.map((item: CountryArray) => item.name) : [],
        logoImage: imageLink,
        addressCountry: addressCountry,
        addressCity: addressCity,
        addressLine1: addressLine1,
        addressLine2: addressLine2 ? addressLine2 : "",
        contactUrl: contactUrl && contactUrl.length ? contactUrl : projectLink
      }
    }) : [],
  }
}
