import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BoneYard Finance',
  description:
    'The most popular AMM on Shibarium by user count! Earn BOYD through yield farming, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BoneYard Finance), NFTs, and more, on a platform you can trust.',
  image: './images/2logos',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | BoneYard Finance',
  },
  '/competition': {
    title: 'Trading Battle | BoneYard Finance',
  },
  '/prediction': {
    title: 'Prediction | BoneYard Finance',
  },
  '/farms': {
    title: 'Farms | BoneYard Finance',
  },
  '/pools': {
    title: 'Pools | BoneYard Finance',
  },
  '/lottery': {
    title: 'Lottery | BoneYard Finance',
  },
  '/collectibles': {
    title: 'Collectibles | BoneYard Finance',
  },
  '/ido': {
    title: 'Initial DEX Offering | BoneYard Finance',
  },
  '/teams': {
    title: 'Leaderboard | BoneYard Finance',
  },
  '/profile/tasks': {
    title: 'Task Center | BoneYard Finance',
  },
  '/profile': {
    title: 'Your Profile | BoneYard Finance',
  },
}
