// Utility Types
// Partial, Readonly, Pick, and Record
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

const todo1: Readonly<Todo> = {
    title: "Delete inactive users",
    description: "..."
};
console.log(updateTodo(todo1, { description: "Delete inactive users, with an 1year inactive account." }));