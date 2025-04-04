import React from 'react'
import { useParams } from 'react-router-dom'

const categories = ["Gromming", "Shirt", "Trouser", "jewellery"];

const Items = () => {
    const {category}  = useParams()

    const match = categories.find((items)=> items.toLowerCase()=== category.toLowerCase())

  return (
    <div>{match ? `you have selected ${match}` : `Match not found`}</div>
  )
}

export default Items