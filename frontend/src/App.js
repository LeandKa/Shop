import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from './Store';
import Global from './Theme/Global';
import Routes from './routes';

function App() {
    return (
        <Provider store={Store.store}>
            <PersistGate loading={null} persistor={Store.persist}>
                <Router basename="/React">
                    <Global />
                    <Routes />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
