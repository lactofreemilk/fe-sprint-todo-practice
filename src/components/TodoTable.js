import React from 'react'

const TodoTable = ({todos}) => {

    // const deleteTodo = (date) => {
    //     let idx = todos.findIndex(el=> el.date === date)
    // }

    if (todos.length === 0) return null;

    return(
        <table>
            <tbody>
                {todos.map((todo) => {
                    if(typeof todo === 'object') {
                    return (
                        <tr>
                            <td><input type="checkbox" className='doneBox'/></td>
                            <td className='todoBox'>{todo.todo}</td>
                            <td><button className='deleteButton'>X</button></td>
                        </tr>
                       
                    )}
                })}
            </tbody>
        </table>
    )
}

export default TodoTable;