import React from 'react'
import Router from 'next/router'

export default () => (
  <div>
    <h1>Main Page</h1>
    <div>
      <button onClick={() => Router.push('/signup')}>
        Sign Up (not hooked up)
      </button>
    </div>
    <button onClick={() => Router.push('/login')}>Login</button>
  </div>
)
