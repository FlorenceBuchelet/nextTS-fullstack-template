import { gql } from "@apollo/client";

export const GET_SOME_EXAMPLES = gql`
query GetSomeExamples {
    getSomeExamples {
        title
        id
        category {
            title
            id
        }
    }
}
`;