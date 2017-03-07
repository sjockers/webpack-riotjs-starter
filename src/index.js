'use strict'

if (module.hot) {
  module.hot.accept()
}

import riot from 'riot'
import './styles/index.scss'
import './components/app.tag'

riot.mount('customize-this-tag-name', {intialValue: 42})
