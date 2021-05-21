defmodule BackendWeb.Schema do
  use Absinthe.Schema

  object :todo do
    field :id, non_null(:id)
    field :group, non_null(:string)
    field :task, non_null(:string)
    field :dependencies, non_null(list_of(:todo))
    field :completed_at, :string
  end

  query do
    @desc "Get all todos"
    field :all_todos, non_null(list_of(non_null(:todo))) do
      resolve(&all_tasks_resolver/3)
    end
  end

  defp all_tasks_resolver(_, _, _) do
    bank = %{
      id: 1,
      group: "Purchases",
      task: "Go to the bank",
      dependencies: [],
      completed_at: nil
    }

    hammer = %{
      id: 2,
      group: "Purchases",
      task: "Buy hammer",
      dependencies: [
        bank
      ],
      completed_at: nil
    }

    wood = %{
      id: 3,
      group: "Purchases",
      task: "Buy wood",
      dependencies: [
        bank
      ],
      completed_at: nil
    }

    nails = %{
      id: 4,
      group: "Purchases",
      task: "Buy nails",
      dependencies: [
        bank
      ],
      completed_at: nil
    }

    paint = %{
      id: 5,
      group: "Purchases",
      task: "Buy paint",
      dependencies: [
        bank
      ],
      completed_at: nil
    }

    fasten = %{
      id: 6,
      group: "Build Airplane",
      task: "Hammer nails into wood",
      dependencies: [
        hammer,
        wood,
        nails
      ],
      completed_at: nil
    }

    wings = %{
      id: 7,
      group: "Build Airplane",
      task: "Paint wings",
      dependencies: [
        paint,
        fasten
      ],
      completed_at: nil
    }

    snack = %{
      id: 8,
      group: "Build Airplane",
      task: "Have a snack",
      dependencies: [],
      completed_at: nil
    }

    {:ok, [bank, hammer, wood, nails, paint, fasten, wings, snack]}
  end
end
