import React from 'react'

import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/checkLoggedIn'

import RegisterBox from '../components/SignUp/RegisterBox'

export default class CreateAccount extends React.Component {
  static async getInitialProps(context) {
    const { loggedInUser } = await checkLoggedIn(context.apolloClient)

    if (loggedInUser.user) {
      // Already signed in? No need to continue.
      // Throw them back to the main page
      redirect(context, '/')
    }

    return {}
  }

  render() {
    return <RegisterBox />
  }
}
