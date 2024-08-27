import { gql } from "@apollo/client";

export const GET_SOME_EXAMPLES = gql`
query GetSomeExamples {
    getSomeExamples {
        id
        title
        category {
            id
            title
        }
    }
}
`;

export const GET_SOME_CATEGORIES = gql`
query getSomeCategories {
    getSomeCategories {
        id
        title
        examples {
            id
            title
        }
    }
}
`;