import gql from "graphql-tag";

export const ProductListQuery = gql`
    query($categoryID: Float){
        viewer{
            productList(filter:{categoryID:$categoryID}){
                name
                productID
            }
        }
    }
`;

export default ProductListQuery;