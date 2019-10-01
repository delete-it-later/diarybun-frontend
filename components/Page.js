import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './Header'
import Meta from './Meta'
import GlobalStyle from './styles/GlobalStyle'

const theme = {
  primary: '#1B1D1C',
  pureBlack: '#000000',
  pureWhite: '#ffffff',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  red: '#FF0000',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
  color: ${(props) => props.theme.black};
  background: ${(props) => props.theme.pureWhite};
`

const Inner = styled.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: ${(props) => props.theme.maxWidth};
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
