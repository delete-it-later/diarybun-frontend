import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './Header'
import Meta from './Meta'
import GlobalStyle from './styles/GlobalStyle'

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.black};
`

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

const Page = (props) => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header />
          <Inner>
            {children}
          </Inner>
        </StyledPage>
      </div>
    </ThemeProvider>
  )
}

export default Page