import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './components/home.tsx';

import { get } from './api/trend_tag';

(async function() {
    ReactDOM.render(
        <Home trendTags={await get()}/>,
        document.getElementById('app')
    );
})();