import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card name="Bunny" age={21} image="https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
      <Card name="Sunny" age={22} image="https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
    </div>
  )
}

export default App