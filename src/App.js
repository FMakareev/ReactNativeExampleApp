import React, { Component } from 'react'
import {
  StyledComponentThemeProvider
} from './Providers/StyledComponentThemeProvider'
import { ApolloClientProvider } from './Providers/ApolloClientProvider'
import {RootStack} from "./Modules";

export default class App extends Component {
  render () {
    return (
      <ApolloClientProvider>
        <StyledComponentThemeProvider>
          <RootStack/>
        </StyledComponentThemeProvider>
      </ApolloClientProvider>
    )
  }
}

