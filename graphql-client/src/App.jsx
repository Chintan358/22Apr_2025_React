import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";


const App = () => {
  const GET_ALL_TODOS = gql`
  query getAlltodos {
    getTodos {
      id
      title
      completed
      user {
        id
        name
        username
        email
        address {
          city
        }
      }
    }
  }
`;
  const { loading, error, data } = useQuery(GET_ALL_TODOS);

  console.log(data);

  return <><h1>Hello</h1></>

}

export default App