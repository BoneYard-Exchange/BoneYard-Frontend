import styled from 'styled-components'
import { Heading } from '@boneyard/uikit'

const Title = styled(Heading).attrs({ size: 'lg' })`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`

export default Title
