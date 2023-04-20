import { graphql } from "graphql";

const GetCartByIdDocument = graphql(/*Graphql */`

query GetCartById($id : ID!){
    cart(id: $id){
        id
        
    }
}

`);