import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "todo_status" */
  delete_todo_status?: Maybe<Todo_Status_Mutation_Response>;
  /** delete single row from the table: "todo_status" */
  delete_todo_status_by_pk?: Maybe<Todo_Status>;
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** insert data into the table: "todo_status" */
  insert_todo_status?: Maybe<Todo_Status_Mutation_Response>;
  /** insert a single row into the table: "todo_status" */
  insert_todo_status_one?: Maybe<Todo_Status>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** update data of the table: "todo_status" */
  update_todo_status?: Maybe<Todo_Status_Mutation_Response>;
  /** update single row of the table: "todo_status" */
  update_todo_status_by_pk?: Maybe<Todo_Status>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
};

/** mutation root */
export type Mutation_RootDelete_Todo_StatusArgs = {
  where: Todo_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Todo_Status_By_PkArgs = {
  value: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootInsert_Todo_StatusArgs = {
  objects: Array<Todo_Status_Insert_Input>;
  on_conflict?: Maybe<Todo_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Todo_Status_OneArgs = {
  object: Todo_Status_Insert_Input;
  on_conflict?: Maybe<Todo_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Todo_StatusArgs = {
  _set?: Maybe<Todo_Status_Set_Input>;
  where: Todo_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Todo_Status_By_PkArgs = {
  _set?: Maybe<Todo_Status_Set_Input>;
  pk_columns: Todo_Status_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _inc?: Maybe<Todos_Inc_Input>;
  _set?: Maybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _inc?: Maybe<Todos_Inc_Input>;
  _set?: Maybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "todo_status" */
  todo_status: Array<Todo_Status>;
  /** fetch aggregated fields from the table: "todo_status" */
  todo_status_aggregate: Todo_Status_Aggregate;
  /** fetch data from the table: "todo_status" using primary key columns */
  todo_status_by_pk?: Maybe<Todo_Status>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
};

/** query root */
export type Query_RootTodo_StatusArgs = {
  distinct_on?: Maybe<Array<Todo_Status_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Todo_Status_Order_By>>;
  where?: Maybe<Todo_Status_Bool_Exp>;
};

/** query root */
export type Query_RootTodo_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Status_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Todo_Status_Order_By>>;
  where?: Maybe<Todo_Status_Bool_Exp>;
};

/** query root */
export type Query_RootTodo_Status_By_PkArgs = {
  value: Scalars["String"];
};

/** query root */
export type Query_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** query root */
export type Query_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** query root */
export type Query_RootTodos_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "todo_status" */
  todo_status: Array<Todo_Status>;
  /** fetch aggregated fields from the table: "todo_status" */
  todo_status_aggregate: Todo_Status_Aggregate;
  /** fetch data from the table: "todo_status" using primary key columns */
  todo_status_by_pk?: Maybe<Todo_Status>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
};

/** subscription root */
export type Subscription_RootTodo_StatusArgs = {
  distinct_on?: Maybe<Array<Todo_Status_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Todo_Status_Order_By>>;
  where?: Maybe<Todo_Status_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTodo_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Status_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Todo_Status_Order_By>>;
  where?: Maybe<Todo_Status_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTodo_Status_By_PkArgs = {
  value: Scalars["String"];
};

/** subscription root */
export type Subscription_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars["Int"];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "todo_status" */
export type Todo_Status = {
  __typename?: "todo_status";
  value: Scalars["String"];
};

/** aggregated selection of "todo_status" */
export type Todo_Status_Aggregate = {
  __typename?: "todo_status_aggregate";
  aggregate?: Maybe<Todo_Status_Aggregate_Fields>;
  nodes: Array<Todo_Status>;
};

/** aggregate fields of "todo_status" */
export type Todo_Status_Aggregate_Fields = {
  __typename?: "todo_status_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Todo_Status_Max_Fields>;
  min?: Maybe<Todo_Status_Min_Fields>;
};

/** aggregate fields of "todo_status" */
export type Todo_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todo_Status_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "todo_status" */
export type Todo_Status_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Todo_Status_Max_Order_By>;
  min?: Maybe<Todo_Status_Min_Order_By>;
};

/** input type for inserting array relation for remote table "todo_status" */
export type Todo_Status_Arr_Rel_Insert_Input = {
  data: Array<Todo_Status_Insert_Input>;
  on_conflict?: Maybe<Todo_Status_On_Conflict>;
};

/** Boolean expression to filter rows from the table "todo_status". All fields are combined with a logical 'AND'. */
export type Todo_Status_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todo_Status_Bool_Exp>>>;
  _not?: Maybe<Todo_Status_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todo_Status_Bool_Exp>>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo_status" */
export enum Todo_Status_Constraint {
  /** unique or primary key constraint */
  TodoStatusPkey = "todo_status_pkey",
}

export enum Todo_Status_Enum {
  Completed = "completed",
  Todo = "todo",
}

/** expression to compare columns of type todo_status_enum. All fields are combined with logical 'AND'. */
export type Todo_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Todo_Status_Enum>;
  _in?: Maybe<Array<Todo_Status_Enum>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Todo_Status_Enum>;
  _nin?: Maybe<Array<Todo_Status_Enum>>;
};

/** input type for inserting data into table "todo_status" */
export type Todo_Status_Insert_Input = {
  value?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Todo_Status_Max_Fields = {
  __typename?: "todo_status_max_fields";
  value?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "todo_status" */
export type Todo_Status_Max_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Todo_Status_Min_Fields = {
  __typename?: "todo_status_min_fields";
  value?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "todo_status" */
export type Todo_Status_Min_Order_By = {
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "todo_status" */
export type Todo_Status_Mutation_Response = {
  __typename?: "todo_status_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Todo_Status>;
};

/** input type for inserting object relation for remote table "todo_status" */
export type Todo_Status_Obj_Rel_Insert_Input = {
  data: Todo_Status_Insert_Input;
  on_conflict?: Maybe<Todo_Status_On_Conflict>;
};

/** on conflict condition type for table "todo_status" */
export type Todo_Status_On_Conflict = {
  constraint: Todo_Status_Constraint;
  update_columns: Array<Todo_Status_Update_Column>;
  where?: Maybe<Todo_Status_Bool_Exp>;
};

/** ordering options when selecting data from "todo_status" */
export type Todo_Status_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "todo_status" */
export type Todo_Status_Pk_Columns_Input = {
  value: Scalars["String"];
};

/** select columns of table "todo_status" */
export enum Todo_Status_Select_Column {
  /** column name */
  Value = "value",
}

/** input type for updating data in table "todo_status" */
export type Todo_Status_Set_Input = {
  value?: Maybe<Scalars["String"]>;
};

/** update columns of table "todo_status" */
export enum Todo_Status_Update_Column {
  /** column name */
  Value = "value",
}

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: "todos";
  created_at: Scalars["timestamptz"];
  id: Scalars["Int"];
  status: Todo_Status_Enum;
  title: Scalars["String"];
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename?: "todos_aggregate";
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename?: "todos_aggregate_fields";
  avg?: Maybe<Todos_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
  stddev?: Maybe<Todos_Stddev_Fields>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Fields>;
  sum?: Maybe<Todos_Sum_Fields>;
  var_pop?: Maybe<Todos_Var_Pop_Fields>;
  var_samp?: Maybe<Todos_Var_Samp_Fields>;
  variance?: Maybe<Todos_Variance_Fields>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todos_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "todos" */
export type Todos_Aggregate_Order_By = {
  avg?: Maybe<Todos_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Todos_Max_Order_By>;
  min?: Maybe<Todos_Min_Order_By>;
  stddev?: Maybe<Todos_Stddev_Order_By>;
  stddev_pop?: Maybe<Todos_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Todos_Stddev_Samp_Order_By>;
  sum?: Maybe<Todos_Sum_Order_By>;
  var_pop?: Maybe<Todos_Var_Pop_Order_By>;
  var_samp?: Maybe<Todos_Var_Samp_Order_By>;
  variance?: Maybe<Todos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "todos" */
export type Todos_Arr_Rel_Insert_Input = {
  data: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** aggregate avg on columns */
export type Todos_Avg_Fields = {
  __typename?: "todos_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "todos" */
export type Todos_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  _not?: Maybe<Todos_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<Todo_Status_Enum_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosPkey = "todos_pkey",
}

/** input type for incrementing integer column in table "todos" */
export type Todos_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  status?: Maybe<Todo_Status_Enum>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: "todos_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "todos" */
export type Todos_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: "todos_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "todos" */
export type Todos_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: "todos_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Todos>;
};

/** input type for inserting object relation for remote table "todos" */
export type Todos_Obj_Rel_Insert_Input = {
  data: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns: Array<Todos_Update_Column>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** ordering options when selecting data from "todos" */
export type Todos_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "todos" */
export type Todos_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Status = "status",
  /** column name */
  Title = "title",
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  status?: Maybe<Todo_Status_Enum>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Todos_Stddev_Fields = {
  __typename?: "todos_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "todos" */
export type Todos_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Todos_Stddev_Pop_Fields = {
  __typename?: "todos_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "todos" */
export type Todos_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Todos_Stddev_Samp_Fields = {
  __typename?: "todos_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "todos" */
export type Todos_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Todos_Sum_Fields = {
  __typename?: "todos_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "todos" */
export type Todos_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Status = "status",
  /** column name */
  Title = "title",
}

/** aggregate var_pop on columns */
export type Todos_Var_Pop_Fields = {
  __typename?: "todos_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "todos" */
export type Todos_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Todos_Var_Samp_Fields = {
  __typename?: "todos_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "todos" */
export type Todos_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Todos_Variance_Fields = {
  __typename?: "todos_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "todos" */
export type Todos_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type AddNewTodoMutationVariables = Exact<{
  title?: Maybe<Scalars["String"]>;
}>;

export type AddNewTodoMutation = {
  __typename?: "mutation_root";
} & {
  insert_todos?: Maybe<
    { __typename?: "todos_mutation_response" } & {
      returning: Array<
        { __typename?: "todos" } & Pick<
          Todos,
          "id" | "title" | "status"
        >
      >;
    }
  >;
};

export type SetCompletedMutationVariables = Exact<{
  id?: Maybe<Scalars["Int"]>;
}>;

export type SetCompletedMutation = {
  __typename?: "mutation_root";
} & {
  update_todos?: Maybe<
    { __typename?: "todos_mutation_response" } & {
      returning: Array<
        { __typename?: "todos" } & Pick<
          Todos,
          "id" | "status" | "title"
        >
      >;
    }
  >;
};

export type DeleteTodoMutationVariables = Exact<{
  id?: Maybe<Scalars["Int"]>;
}>;

export type DeleteTodoMutation = {
  __typename?: "mutation_root";
} & {
  delete_todos?: Maybe<
    { __typename?: "todos_mutation_response" } & Pick<
      Todos_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type GetDoneTodosSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type GetDoneTodosSubscription = {
  __typename?: "subscription_root";
} & {
  done: Array<
    { __typename?: "todos" } & Pick<
      Todos,
      "id" | "status" | "title"
    >
  >;
};

export type GetTodoTodosSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type GetTodoTodosSubscription = {
  __typename?: "subscription_root";
} & {
  todo: Array<
    { __typename?: "todos" } & Pick<
      Todos,
      "id" | "status" | "title"
    >
  >;
};

export const AddNewTodoDocument = gql`
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
export type AddNewTodoMutationFn = ApolloReactCommon.MutationFunction<
  AddNewTodoMutation,
  AddNewTodoMutationVariables
>;

/**
 * __useAddNewTodoMutation__
 *
 * To run a mutation, you first call `useAddNewTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewTodoMutation, { data, loading, error }] = useAddNewTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAddNewTodoMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddNewTodoMutation,
    AddNewTodoMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    AddNewTodoMutation,
    AddNewTodoMutationVariables
  >(AddNewTodoDocument, baseOptions);
}
export type AddNewTodoMutationHookResult = ReturnType<
  typeof useAddNewTodoMutation
>;
export type AddNewTodoMutationResult = ApolloReactCommon.MutationResult<
  AddNewTodoMutation
>;
export type AddNewTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddNewTodoMutation,
  AddNewTodoMutationVariables
>;
export const SetCompletedDocument = gql`
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
export type SetCompletedMutationFn = ApolloReactCommon.MutationFunction<
  SetCompletedMutation,
  SetCompletedMutationVariables
>;

/**
 * __useSetCompletedMutation__
 *
 * To run a mutation, you first call `useSetCompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetCompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setCompletedMutation, { data, loading, error }] = useSetCompletedMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSetCompletedMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SetCompletedMutation,
    SetCompletedMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    SetCompletedMutation,
    SetCompletedMutationVariables
  >(SetCompletedDocument, baseOptions);
}
export type SetCompletedMutationHookResult = ReturnType<
  typeof useSetCompletedMutation
>;
export type SetCompletedMutationResult = ApolloReactCommon.MutationResult<
  SetCompletedMutation
>;
export type SetCompletedMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SetCompletedMutation,
  SetCompletedMutationVariables
>;
export const DeleteTodoDocument = gql`
  mutation DeleteTodo($id: Int) {
    delete_todos(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
export type DeleteTodoMutationFn = ApolloReactCommon.MutationFunction<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteTodoMutation,
    DeleteTodoMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    DeleteTodoMutation,
    DeleteTodoMutationVariables
  >(DeleteTodoDocument, baseOptions);
}
export type DeleteTodoMutationHookResult = ReturnType<
  typeof useDeleteTodoMutation
>;
export type DeleteTodoMutationResult = ApolloReactCommon.MutationResult<
  DeleteTodoMutation
>;
export type DeleteTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>;
export const GetDoneTodosDocument = gql`
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

/**
 * __useGetDoneTodosSubscription__
 *
 * To run a query within a React component, call `useGetDoneTodosSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetDoneTodosSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoneTodosSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetDoneTodosSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    GetDoneTodosSubscription,
    GetDoneTodosSubscriptionVariables
  >
) {
  return ApolloReactHooks.useSubscription<
    GetDoneTodosSubscription,
    GetDoneTodosSubscriptionVariables
  >(GetDoneTodosDocument, baseOptions);
}
export type GetDoneTodosSubscriptionHookResult = ReturnType<
  typeof useGetDoneTodosSubscription
>;
export type GetDoneTodosSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  GetDoneTodosSubscription
>;
export const GetTodoTodosDocument = gql`
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

/**
 * __useGetTodoTodosSubscription__
 *
 * To run a query within a React component, call `useGetTodoTodosSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoTodosSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoTodosSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetTodoTodosSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    GetTodoTodosSubscription,
    GetTodoTodosSubscriptionVariables
  >
) {
  return ApolloReactHooks.useSubscription<
    GetTodoTodosSubscription,
    GetTodoTodosSubscriptionVariables
  >(GetTodoTodosDocument, baseOptions);
}
export type GetTodoTodosSubscriptionHookResult = ReturnType<
  typeof useGetTodoTodosSubscription
>;
export type GetTodoTodosSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  GetTodoTodosSubscription
>;