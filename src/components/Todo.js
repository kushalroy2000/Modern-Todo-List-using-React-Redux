import React, {useState} from 'react'
import './Todo.css'
import { addTodo, deleteTodo, RemoveTodo } from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'

export const Todo = () => {
    const [input, setinput] = useState('')
    const dispatch = useDispatch()
    const list = useSelector((state) => state.todoReducer.list)

    return (
        <>
        <div className='container'>
            <div className='main-div'>
                <figure>
                    <figcaption>Add Your List Here</figcaption>
                </figure>
                <input type='text' placeholder='Add Your Item'
                value={input} onChange={(e) => setinput(e.target.value)}/>
                <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(input), setinput(''))}> </i>
            </div>
            <div>
                {
                  list.map((elem) => {
                      return(
                          <div className='allitems' key={elem.id} >
                              <h3>{elem.data}</h3>
                              <div className='todo-btn'>
                                  <i className='far fa-trash-alt add-btn' title='delete item' onClick={() => dispatch(deleteTodo(elem.id))} />
                              </div>
                          </div>
                      )
                  })
                }
            </div>
            <div className='showitem'>
                <button className='clearbtn' onClick={() =>dispatch(RemoveTodo())}>Clear All</button>
            </div>
        </div>
        </>
    )
}
