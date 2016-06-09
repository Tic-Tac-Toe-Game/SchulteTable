import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Application from 'st/components/application.connect';
import ApplicationStore from 'st/reducers/application';

const store = createStore(ApplicationStore);

render(
    <Provider store={store}>
        <Application size={5} />
    </Provider>,
    document.getElementById('js-schulte')
);