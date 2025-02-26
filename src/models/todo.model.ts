interface ITodo {
    id: string;
    text: string;
    status: boolean
}

interface IStatus {
    id: string;
}

type TodoType = {
    todos: ITodo[];
    ids: IStatus[],
    addTodo: (text: string) => void,
    editTodo: (id: string, text: string) => void,
    removeTodo: (id: string) => void,
    changeTodoStatus: (id: string) => void,
};

export type { ITodo, IStatus, TodoType };
