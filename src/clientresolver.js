const tasks = [
    {
      __typename: 'Task',
      "id": 1,
      "group": "Purchases",
      "task": "Go to the bank",
      "dependencyIds": [],
      "completedAt": null
    },
    {
      __typename: 'Task',
      "id": 2,
      "group": "Purchases",
      "task": "Buy hammer",
      "dependencyIds": [
        1
      ],
      "completedAt": null
    },
    {
      __typename: 'Task',
      "id": 3,
      "group": "Purchases",
      "task": "Buy wood",
      "dependencyIds": [
        1
      ],
      "completedAt": null
    },
    {
      __typename: 'Task',
      "id": 4,
      "group": "Purchases",
      "task": "Buy nails",
      "dependencyIds": [
        1
      ],
      "completedAt": null
    },
    {
      __typename: 'Task',
      "id": 5,
      "group": "Purchases",
      "task": "Buy paint",
      "dependencyIds": [
        1
      ],
      "completedAt": null
    },
    {
      __typename: 'Task',
      "id": 6,
      "group": "Build Airplane",
      "task": "Hammer nails into wood",
      "dependencyIds": [
        2,
        3,
        4
      ],
      "completedAt": null
    },
    {
      __typename: 'Task',
      "id": 7,
      "group": "Build Airplane",
      "task": "Paint wings",
      "dependencyIds": [
        5,
        6
      ],
      "completedAt": null
    },
    {
      __typename: 'Task',
      "id": 8,
      "group": "Build Airplane",
      "task": "Have a snack",
      "dependencyIds": [],
      "completedAt": null
    }
]

const clientResolver =  {
  queries: {
    tasks: async () => tasks
  }
}

export default clientResolver
