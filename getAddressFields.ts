import { Charity, Address } from "../../../types/types";

export function getAddressFields(project: Charity): Address[] {
  const { addressCountry, addressCity, addressLine1, addressLine2 } = project;
  return [
    { key: "country", value: addressCountry },
    { key: "city", value: addressCity },
    { key: "address", value: addressLine2.length > 0 ? `${addressLine1}, ${addressLine2}` : addressLine1 }
  ];
}