import React from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_TASKS = gql`
  query tasks {
    tasks @client {
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

  const {data, loading, error} = useQuery(GET_TASKS)

  if(loading)
    console.log(loading)

  if(data)
    console.log(data)

  if(error)
    console.log(error)

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>World</p>
    </React.Fragment>
  )
}

export default App
