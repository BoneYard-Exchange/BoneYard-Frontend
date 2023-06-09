import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image } from '@boneyard/uikit'
import { ifosConfig } from 'config/constants'
import useI18n from 'hooks/useI18n'
import IfoCard from './components/IfoCard'
import Title from './components/Title'
import IfoCards from './components/IfoCards'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

const Ifo = () => {
  const TranslateString = useI18n()

  return (
    <div>
      <IfoCards isSingle>{activeIfo ? <IfoCard ifo={activeIfo} /> : <Text>No Active IDOs</Text>}</IfoCards>
      <LaunchIfoCallout>
        <div>
          <Title as="h2">{TranslateString(592, 'How to Participate in Decentralized IDOs on BoneYard Finance')}</Title>
          <Heading mb="16px">{TranslateString(594, 'Before IDO')}:</Heading>
          <List>
            <li>{TranslateString(596, 'Buy BOYD and BUSD Tokens')}</li>
            <li>{TranslateString(598, 'Get BOYD-BUSD LP tokens (ShibaSwap Only) on ShibariumSwap')}</li>
          </List>
          <Flex mb="16px">
            <LinkExternal href="https://app.uniswap.org/#/swap" mr="16px">
              {TranslateString(999, 'Buy BOYD')}
            </LinkExternal>
            <LinkExternal href="https://app.uniswap.org/#/add/v2/0x4B00c8c4F6A1eD1c476c060D32cEA97d61d23113/0xC2E45A6eCa39A968ed9cb1Dc42B5345bC736E280">
              {TranslateString(999, 'Get LP tokens')}
            </LinkExternal>
          </Flex>
          <Heading mb="16px">{TranslateString(600, 'During IDO')}:</Heading>
          <List>
            <li>
              {TranslateString(
                602,
                'While the IDO is live, commit your BOYD-BUSD LP tokens to participate in the decentralized raise at the predetermined token price',
              )}
            </li>
          </List>
          <Heading mb="16px">{TranslateString(604, 'After IDO')}:</Heading>
          <List>
            <li>
              {TranslateString(
                606,
                'Click "Claim" to claim the IDO tokens you purchased along with any unspent BOYD-BUSD LP.',
              )}
            </li>
            <li>{TranslateString(608, 'Done!')}</li>
          </List>
          <img src="images/cub/boyd_finance.png" alt="boyd" />
          <Text as="div" pt="16px">
            <Button
              as="a"
              variant="secondary"
              href="https://forms.gle/Q2BBZE4BioxtD9TM9"
            >
              {TranslateString(610, 'Read more')}
            </Button>
          </Text>
        </div>
        <div>
          <Image src="/images/cub/ido_img.png" alt="ifo bunny" width={436} height={344} responsive />
          <div>
            <Title as="h2">{TranslateString(512, 'Want to launch your own IDO?')}</Title>
            <Text mb={3}>
              {TranslateString(
                514,
                'Launch your project with BOYDefi to bring your token directly to the most active and rapidly growing community on Shibarium.',
              )}
            </Text>
            <Button as="a" href="https://forms.gle/Q2BBZE4BioxtD9TM9" external>
              {TranslateString(516, 'Apply to launch')}
            </Button>
          </div>
        </div>
      </LaunchIfoCallout>
    </div>
  )
}

export default Ifo
