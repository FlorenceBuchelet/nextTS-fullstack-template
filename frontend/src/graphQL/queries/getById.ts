import { gql } from "@apollo/client";

export const GET_EXAMPLE_BY_ID = gql`
`;

export const GET_CATEGORY_BY_ID = gql`
mutation CreateExample($title: String!, $categoryId: Float) {
    createExample(title: $title, categoryId: $categoryId) {
        id
        title
    }
}
`;