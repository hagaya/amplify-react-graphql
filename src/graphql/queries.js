/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomerById = /* GraphQL */ `
  query GetCustomerById($id: ID!) {
    getCustomerById(id: $id) {
      PK
      email
      __typename
    }
  }
`;
export const getProductById = /* GraphQL */ `
  query GetProductById($id: ID!) {
    getProductById(id: $id) {
      PK
      qty
      price
      name
      detail
      __typename
    }
  }
`;
export const getOrderById = /* GraphQL */ `
  query GetOrderById($id: ID!) {
    getOrderById(id: $id) {
      PK
      SK
      type
      amount
      orderItems {
        PK
        SK
        price
        name
        qty
        type
        __typename
      }
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
