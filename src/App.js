import React from 'react'
import { gql, useQuery} from '@apollo/client'

const query = gql`
query {
  allTodos {
    id
    group
    task
    dependencies {
      id
    }
    completedAt
  }
}
`

const App = () => {
  const {data} = useQuery(query)

  const count = (data && data.allTodos) ? data.allTodos.length : 0

  return (
    <React.Fragment>
      <h1>Hello world, you have {count} things to do</h1>
    </React.Fragment>
  )
}

export default App
