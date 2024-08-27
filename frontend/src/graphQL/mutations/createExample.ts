import { gql } from "@apollo/client";

export const CREATE_EXAMPLE = gql`
mutation CreateExample($title: String!, $categoryId: Float) {
        createExample(title: $title, categoryId: $categoryId) {
            id
            title
        }
    }
`;