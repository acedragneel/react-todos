import TodoRowItems from './TodoRowItems';

function TodoTable(props){

    return (
        <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              {props.todos.map(todos => (
                <TodoRowItems
                    key = {todos.rowNumber}
                    rowNumber = {todos.rowNumber}
                    rowDescription = {todos.rowDescription}
                    rowAssigned = {todos.rowAssigned}
                    deleteTodo = {props.deleteTodo}
                />
              ))}
            </tbody>
        </table>
    )
}

export default TodoTable