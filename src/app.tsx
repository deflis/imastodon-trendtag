import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './components/home';

import { get, getTestData } from './api/trend_tag';

declare const __PRODUCTION__: boolean
const loadedData = __PRODUCTION__ ? get() : getTestData()

window.addEventListener('DOMContentLoaded',() => {
    loadedData.then(trendTags => ReactDOM.render(
        <Home trendTags={ trendTags}/>,
        document.getElementById('app')
    )).catch(e => {
        console.error(e)
        ReactDOM.render(
            <div>アイマストドンが落ちているようです？</div>,
            document.getElementById('app')
        );
    });
});
