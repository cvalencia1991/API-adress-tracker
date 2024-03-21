import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import store from './features/store.ts'
import { fetchIpAddress } from './features/reducers/ipReducer.ts'

store.dispatch(fetchIpAddress({ipAddress:''}))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store= {store}>
    <App />
  </Provider>,
)
