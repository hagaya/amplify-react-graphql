/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer($input: createCustomerInput!) {
    createCustomer(input: $input) {
      PK
      email
      __typename
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct($input: createProductInput!) {
    createProduct(input: $input) {
      PK
      qty
      price
      name
      detail
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder($input: createOrderInput!) {
    createOrder(input: $input) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
