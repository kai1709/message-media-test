import React from 'react';
import LandingPage from './containers/LandingPage'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { configureStore } from './store';
import './App.scss'

const store = configureStore(reducers)

const App = () => (
    <Provider store={store}>
        <div className="container">
            <LandingPage />
        </div>
    </Provider>
)

export default App;
