import flatten from 'flat';

const options = { safe: true, delimiter: '_' }
const nestedColors = {
  base: {
    'background': '#ffffff',
    'top-bar-navigation': '#000000',
    'secondary-navigation-bar': '#2B2B2B',
    'wallet-sidebar-and-popup': '#333333',
    'footer': '#000000',
    'fields': '#191919',
    'inactive-button': '#535353',
  },

  labels: {
    'important-active-labels-text-graphics': '#000000',
    'secondary-inactive-label-text-graphics': '#808080',
  },

  trading: {
    'selling-related-elements': '#ee4036',
    'buying-related-elements': '#00a69c',
  },

  specials: {
    'buttons-links-and-highlights': '#0066b4',
    'chat-messages': '#98ccb2',
    'my-username-in-chat': '#ffff00',
    'checks-okay-done': '#008000',
    'pending-waiting-caution': '#F6921E',
    'notifications-alerts-warnings': '#ed1c24',
  }
};

const color = flatten(nestedColors, options)

export const oldLight = {

  //commonColors
  'colors-main-black': '#212121',
  'colors-white': 'white',
  'colors-black': '#000000',
  'colors-wave-phase-completed': '#808000',

  // common colors for deactivate and disabled look
  'colors-deactivate': '#797779',
  'colors-deactivate-color1': '#cccbcb',
  'colors-deactivate-color2': '#777677',
  'colors-deactivate-color3': '#f2f2f3',
  'colors-deactivate-color4': '#f1f2f2',

  //common colors for notifications and errors
  'colors-notifications-red': '#ed1c24',
  'colors-notification-inactive-red': '#e26171',
  'colors-notifications-blue': '#0000ff',
  'colors-notifications-green': '#00a651',

  //common colors for currencies
  'color-currency-eur--main': '#00a651',
  'color-currency-eur--secondary': '#52c2b8',
  'color-currency-btc--main': '#f15a29',
  'color-currency-btc--secondary': '#f7941e',
  'colors-currencies-bch': '#ec008c',
  'colors-currencies-eth': '#2e3192',
  'colors-currencies-ltc': '#58595b',
  'colors-currencies-xrp': '#2e3192',

  //common colors for terms
  'colors-terms-background': '#191919',

  // common colors for app bar
  'dark-app-bar-add-tab-menu-background': '#202020',
  'dark-app-bar-tab-active-menu-list-background': '#333333',
  'app-bar-menu-list-color': '#808080',
  'app-bar-icon-inactive': '#808080',
  'app-bar--quicktrade-active-color': '#fff100',
  'app-bar--quicktrade-inactive-color': '#ceac20',
  'app-bar-pairs-up': 'green',
  'app-bar-pairs-down': '#ed1c24',
  'dark-app-bar-pairs-up': '#00A69C',
  'dark-app-bar-pairs-down': '#EE4036',

  // remaining dark colors
  'dark-app-background-color': '#202020',
  'dark-app-light-background': '#2b2b2b',
  'dark-quick-trade-container': '#333333',
  'dark-app-line-divider': '#535353',
  'dark-buy': '#00A69C',
  'dark-link': '#0066B4',
  'dark-border-main': '#535353',
  'dark-inactive-color': '#2e2f37',
  'dark-font-main-text-color': '#ffffff',
  'dark-font-sub-text-color': '#808080',
  'dark-font-sub-text-1-color': '#808080',
  'dark-disabled-main': '#2e2f37',
  'dark-accordion-arrow-active': '#ffffff',

  //Theme colors
  'app-background-color': '#ffffff',
  'app-light-background': '#F2F2F3',
  'app-sidebar-background': 'white',
  'auth-container-background': '#ffffff',
  'quick-trade-background': '#ebf3f1',
  'quick-trade-container': '#ffffff',
  'app-modal-background': '#ddddddbf',
  'app-bar-background-color': '#000000',
  'app-line-divider': '#212121',
  'box-fields': '#f0f1f1',
  'buy': '#6496AA',
  'sell': '#000000',
  'color-sell-btc-light': '#000000',
  'link': '#0000ff',
  'trade-fields': '#cccbcb',
  'trade-fields-border': '#212121',
  'trade-fill-indicator': '#000000',
  'trade-fill-indicator-text': '#878787',
  'buy-bids-text': '#000000',
  'sell-bids-text': '#ffffff',
  'app-logo-color': '#ffffff',
  'sidebar-border--color': '#797779',
  'border-color': '#777677',
  'border-main': '#212121',

  //Form field colors
  'form-color-underline-focus': '#212121',
  'form-color-underline': '#cccbcb',
  'form-color-placeholder': '#cccbcb',
  'form-arrow': '#212121',
  'form-label': '#777677',
  'form-text-disabled': '#797779',

  // tabs colors
  'tab-active': '#212121',
  'tab-inactive': '#777677',
  'sidebar-color': '#777677',
  'sidebar-color-active': '#212121',
  'info-panel-background': '#f5f5f5',
  'info-panel-text': '#777677',
  'icon-hover': '#212121',
  'icon-unhover': '#777677',
  'trade-tabs-inactive-color': '#808080',

  // theme footer
  'footer-background-color': '#000000',

  // chat color
  'chat-message-background-even': '#f0f1f1',
  'chat-message-background-odd': '#e6e6e6',
  'chat-message-color': '#4f4f4f',
  'chat-box-border': '#f0f1f1',

  // transactions history
  'history-color-buy': '#d1d4dc',
  'history-color-sell': '#000000',

  // Trading view colors used in chart config
  'tradingViewWaterMark': '#202020',
  'tradingViewAxis': '#E6ECEF',
  'tradingViewText': '#292b2c',

  'inactive-color': "#2e2f37",

//  coins

  'coin-eur': '#06773d',
  'coin-eur-text': '#ffffff',
  'coin-usd': '#01592e',
  'coin-usd-text': '#ffffff',
  'coin-jpy': '#e0dfc7',
  'coin-jpy-text': '#000000',
  'coin-gbp': '#482e6e',
  'coin-gbp-text': '#ffffff',
  'coin-chf': '#ed1c24',
  'coin-chf-text': '#ffffff',
  'coin-cad': '#d7ce58',
  'coin-cad-text': '#000000',
  'coin-aud': '#19441f',
  'coin-aud-text': '#ffffff',
  'coin-nzd': '#b3498c',
  'coin-nzd-text': '#ffffff',
  'coin-zar': '#d8d3a0',
  'coin-zar-text': '#000000',
  'coin-hkd': '#f48f9b',
  'coin-hkd-text': '#000000',
  'coin-krw': '#f9ee02',
  'coin-krw-text': '#000000',
  'coin-cny': '#ec008c',
  'coin-cny-text': '#ffffff',
  'coin-sgd': '#720f15',
  'coin-sgd-text': '#ffffff',
  'coin-btc': '#f7941d',
  'coin-btc-text': '#000000',
  'coin-eth': '#3e4ea1',
  'coin-eth-text': '#ffffff',
  'coin-ltc': '#bcbec0',
  'coin-ltc-text': '#000000',
  'coin-bch': '#8dc541',
  'coin-bch-text': '#000000',
  'coin-xrp': '#414042',
  'coin-xrp-text': '#ffffff',
  'coin-xht': '#000000',
  'coin-xht-text': '#ffffff',
  'coin-eos': '#58595b',
  'coin-eos-text': '#ffffff',
  'coin-bnb': '#f1ba2a',
  'coin-bnb-text': '#000000',
  'coin-link': '#1b75bc',
  'coin-link-text': '#ffffff',
  'coin-trx': '#a22d25',
  'coin-trx-text': '#ffffff',
  'coin-ada': '#3667b2',
  'coin-ada-text': '#ffffff',
  'coin-matic': '#2aaae2',
  'coin-matic-text': '#ffffff',
  'coin-neo': '#bcbec0',
  'coin-neo-text': '#000000',
  'coin-etc': '#009444',
  'coin-etc-text': '#000000',
  'coin-xlm': '#808285',
  'coin-xlm-text': '#ffffff',
  'coin-xmr': '#f15a29',
  'coin-xmr-text': '#ffffff',
  'coin-zec': '#fbb040',
  'coin-zec-text': '#000000',
  'coin-one': '#939598',
  'coin-one-text': '#ffffff',
  'coin-pax': '#163526',
  'coin-pax-text': '#ffffff',
  'coin-usdc': '#4d7d91',
  'coin-usdc-text': '#ffffff',
  'coin-usdt': '#2bb673',
  'coin-usdt-text': '#ffffff',
  'coin-vet': '#454c7d',
  'coin-vet-text': '#ffffff',
  'coin-btt': '#c49a6c',
  'coin-btt-text': '#ffffff',
  'coin-qtum': '#96daf7',
  'coin-qtum-text': '#000000',
  'coin-algo': '#594a42',
  'coin-algo-text': '#ffffff',
  'coin-rvn': '#662d91',
  'coin-rvn-text': '#ffffff',
  'coin-iota': '#603913',
  'coin-iota-text': '#ffffff',
  'coin-dash': '#417ec1',
  'coin-dash-text': '#ffffff',
  'coin-bsv': '#a09032',
  'coin-bsv-text': '#ffffff',
  'coin-ont': '#00a79d',
  'coin-ont-text': '#ffffff',
  'coin-atom': '#796184',
  'coin-atom-text': '#ffffff',
  'coin-celr': '#726658',
  'coin-celr-text': '#ffffff',
  'coin-omg': '#8e7fbb',
  'coin-omg-text': '#ffffff',
  'coin-hot': '#8b5e3c',
  'coin-hot-text': '#ffffff'
}

export default color;