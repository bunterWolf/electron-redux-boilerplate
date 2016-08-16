import React from 'react'
import ReactDOM from 'react-dom'
import {Counter} from './components/counter'
import {Provider} from 'react-redux'
import {storeSetup} from './store/store-setup'
import {DevToolsSetup} from './tools/devtools-setup'


if (process.env.NODE_ENV !== 'production') {
  // execute window.devToolsSetup() on the developer console to install them
  window.devToolsSetup = DevToolsSetup
  require('electron-connect').client.create()
}

const store = storeSetup({});

ReactDOM.render(
    <Provider store={ store }>
      <Counter/>
    </Provider>
  ,
  document.getElementById('app')
);
