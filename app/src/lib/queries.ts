import gql from "graphql-tag";

export const ADD_NEW_TODO = gql`
  mutation AddNewTodo($title: String) {
    insert_todos(objects: { status: todo, title: $title }) {
      returning {
        id
        title
        status
      }
    }
  }
`;

export const SET_COMPLETED = gql`
  mutation SetCompleted($id: Int) {
    update_todos(
      _set: { status: completed }
      where: { id: { _eq: $id } }
    ) {
      returning {
        id
        status
        title
      }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int) {
    delete_todos(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export const GET_DONE_TODOS = gql`
  subscription getDoneTodos {
    done: todos(
      where: { status: { _eq: completed } }
      order_by: { created_at: desc }
    ) {
      id
      status
      title
    }
  }
`;

export const GET_TODO_TODOS = gql`
  subscription getTodoTodos {
    todo: todos(
      where: { status: { _eq: todo } }
      order_by: { created_at: desc }
    ) {
      id
      status
      title
    }
  }
`;
