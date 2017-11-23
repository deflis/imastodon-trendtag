import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './components/home';
import { Header } from './components/header';
import { Footer } from './components/footer';

import { get } from './api/trend_tag';
import { Container } from './components/bootstrap/container';

window.addEventListener('DOMContentLoaded',() => {
    get().then(trendTags => ReactDOM.render(
        <div>
            <Header updatedAt={trendTags.updatedAt} />
            <Home trendTags={ trendTags}/>
            <Footer />
        </div>,
        document.getElementById('app')
    )).catch(e => {
        console.error(e)
        ReactDOM.render(
            <div>
                <Header />
                    <Container>アイマストドンが落ちているようです？</Container>
                <Footer />
            </div>,
            document.getElementById('app')
        );
    });
});
