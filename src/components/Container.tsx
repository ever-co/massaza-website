import * as React from 'react'
import styled from '@emotion/styled'

const StyledContainer = styled.div`
  position: relative;
  margin: auto;
  width: auto;
  width: 100%;
  max-width: 80em;
`

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => <StyledContainer className={className}>{children}</StyledContainer>

export default Container
