import React from 'react'
import styled from 'styled-components'
import { Heading, Button } from '@boneyard/uikit'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;
`

const StyledHero = styled.div`
  background-image: linear-gradient(139.73deg, #E6FDFF 0%, #eff8ff 100%);
  padding-bottom: 40px;
  padding-top: 40px;
  margin-bottom: 32px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <Container>
        <Title>{TranslateString(500, 'IDO: Initial DEX Offerings')}</Title>
        <Heading as="h2" color="primary">{TranslateString(502, 'Participate in new platform tokens via decentralized IDOs! 50% of the raise burns BOYD and 50% goes to the project team who initiated the IDO.')}</Heading>
        <br />
        <Wrapper>
          <Button size="sm">
            <a href="https://forms.gle/Q2BBZE4BioxtD9TM9">Learn More</a>
          </Button>
        </Wrapper>
      </Container>
    </StyledHero>
  )
}

export default Hero
