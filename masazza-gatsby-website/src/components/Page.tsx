import * as React from 'react'
import styled from '@emotion/styled'

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  margin-bottom: 3rem;
  overflow: hidden;

  @media (max-width: 1280px) {
    padding: 0;
    margin: 0;
  }
`

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>

export default Page
