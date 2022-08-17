import ReactDOM from 'react-dom';
import App from './view/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './store'

import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
* {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
};
body {
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
}
`
ReactDOM.render(
        <BrowserRouter>
                <Provider store={store}>
                        <Global/>
                        <App />
                </Provider>
        </BrowserRouter>,
document.getElementById('root')
);

