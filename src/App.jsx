import React from 'react'
import { Accordion } from './components/Accordion'

export const App = () => {


  const data = [
    {
      name: "Section 1.",
      items: []
    },
    {
      name: "Section 2.",
      items: [{ name: "Javascript" }, { name: "PHP" }, { name: "Python" }]
    },
    {
      name: "Section 3..",
      items: []
    }
  ]

  return (
    <div>
      <Accordion sections={data} />
    </div>
  )
}
