import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
  const params = useParams()
  return (
    <div>
      <h1>This is {params.username}</h1>
    </div>
  )
}
