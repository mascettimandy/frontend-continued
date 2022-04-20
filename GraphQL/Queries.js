import { gql } from "@apollo/client";

export const LOAD_URL = gql`
  query getUrl {
    link {
      url
      slug
    }
  }
`;
