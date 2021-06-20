import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

import { Router } from './pages/Router'
import { Nav } from './pages/Nav'
import './App.css'

import { getTodos } from './store/thunks'

const navItems = [
  {
    href: '/todos',
    title: 'Todos',
  },
  {
    href: '/editor',
    title: 'Editor',
  },
]

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const result = dispatch(getTodos())

    console.log('dispatch(getTodos()) result', result)
    result.thunk.then((data) => {
      console.log('todo items', data)
    })
  }, [dispatch])
  return (
    <div className="app__container">
      <Router>
        <Nav activeKey="/todos" items={navItems} />
      </Router>
    </div>
  )
}

export default App
