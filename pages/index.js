import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'

export default () => (
  <div>
    <h1>Main Page</h1>
    <div>
      <button onClick={() => Router.push('/signup')}>Sign Up</button>
    </div>
    <button onClick={() => Router.push('/login')}>Login</button>
  </div>
)
