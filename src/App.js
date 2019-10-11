import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import configureStore from './components/redux/store';

const store = configureStore();
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <div>
                        <Header />
                        <ImageGrid />
                    </div>
                </Fragment>
            </Provider>
        );
    }
}

export default App;
