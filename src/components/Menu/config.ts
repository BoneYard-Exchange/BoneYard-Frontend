import { MenuEntry } from "@boneyard/uikit";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://app.uniswap.org/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://app.uniswap.org/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Dens',
    icon: 'PoolIcon',
    href: '/dens',
  },
  {
    label: 'Kingdoms',
    icon: 'PawIcon',
    href: '/kingdoms',
    status: {
      text: 'AUTO',
      color: 'warning',
    },
  },
  {
    label: 'Wrap HBD',
    icon: 'DollarIcon',
    href: "https://wleo.io/hbd-bsc/",
  },
  {
    label: 'Wrap HIVE',
    icon: 'HiveIcon',
    href: "https://wleo.io/hive-bsc/",
  },
  {
    label: 'IDO',
    icon: 'IfoIcon',
    href: '/ido',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/BoneYard-Exchange',
      },
      {
        label: 'ShibariumSwap',
        href: 'https://pancakeswap.info/token/0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/cub-finance/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/cub-finance',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
      },
    ],
  },
  {
    label: 'Docs',
    icon: 'TicketIcon',
    href: 'https://johns-organization-20.gitbook.io/boyd-token/',
  },
  {
    label: 'Roadmap',
    icon: 'MoreIcon',
    href: 'https://johns-organization-20.gitbook.io/boyd-token/roadmap',
  },
  {
    label: "Tokenized Blogging",
    icon: "TokenizeIcon",
    href: "https://leofinance.io/",
  },
  {
    label: "Blog",
    icon: "BlogIcon",
    href: "https://leofinance.io/@leofinance",
  },
  {
    label: 'CertiK Audit',
    icon: 'AuditIcon',
    href: 'https://www.certik.org/projects/cubfinance',
  },
]

export default config
