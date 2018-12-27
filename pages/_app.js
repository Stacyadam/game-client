import App, { Container } from 'next/app'
import React from 'react'
import withApollo from '../lib/withApollo'
import { ApolloProvider } from 'react-apollo'
import { GlobalStyle } from '../components/GlobalStyles'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <GlobalStyle />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
