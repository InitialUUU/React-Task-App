import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
)// Provider로 react component를 감싸므로써 어느 페이지에서도 Reducer를 사용하고 수정할 수 있도록 하기 위함
