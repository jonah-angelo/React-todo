import { useState } from 'react'
import "./index.css"

function App() {
  return (
    <>
      <form className='new-item-form'>
        <div className="form-row">
          <label> New item</label>
          <input type='item' id='item' />
        </div>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        <li>
          <label>
            <input type='checkbox'>
              item 1
            </input>
            <button className='btn btn-danger'>Delete</button>
          </label>
        </li>
        <li>
          <label>
            <input type='checkbox'>
              item 1
            </input>
            <button className='btn btn-danger'>Delete</button>
          </label>
        </li>
      </ul>
    </>
  )
}

export default App
