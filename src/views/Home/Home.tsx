import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@boneyard/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
// import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import TwitterCard from 'views/Home/components/TwitterCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import BridgeCard from 'views/Home/components/BridgeCard'
import KingdomCard from 'views/Home/components/KingdomCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/cub/BoneshibCharacter.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/cub/Bonelogo.png'), url('/images/cub/BoneshibCharacter.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="primary">
          {TranslateString(576, 'Boneyard Finance')}
        </Heading>
        <Text>{TranslateString(578, 'Boneyard Finance on Shibarium Chain.')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          {/* <LotteryCard /> */}
        </Cards>
        <CTACards>
          <EarnAPRCard />
          <KingdomCard />
          {/* <WinCard /> */}
        </CTACards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
