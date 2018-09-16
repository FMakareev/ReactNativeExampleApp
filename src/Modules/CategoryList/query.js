import gql from "graphql-tag";

export const CategoryListQuery = gql`
    query{
        viewer{
            categoryList{
                name
                categoryID
                description
            }
        }
    }
`;

export default CategoryListQuery;