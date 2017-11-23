import React from 'react';
import { NavBar } from "./bootstrap/navbar";
import { Theme, Color } from './bootstrap/index';

export class Footer extends React.Component {
    render() {
        return (<footer>
            <NavBar theme={Theme.Light} bg={Color.Light}>
                <NavBar.Text>
                    Powered by <a href="https://imastodon.net">imastodon.net</a>
                </NavBar.Text>
                <NavBar.Text>
                    Source: <a href="https://github.com/deflis/imastodon-trendtag">Github</a>
                </NavBar.Text>
            </NavBar>
        </footer>);
    }
}