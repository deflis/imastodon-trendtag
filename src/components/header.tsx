import React from 'react';
import moment from "moment";
import { NavBar } from './bootstrap/navbar';
import { Theme, Color } from './bootstrap/index';

export interface HeaderProps {
    updatedAt: moment.Moment
}

export class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <NavBar theme={Theme.Dark} bg={Color.Dark}>
                <NavBar.Brand href="#">トレンドタグ</NavBar.Brand>
                <NavBar.Text>更新時刻: {this.props.updatedAt.format("LLLL")}</NavBar.Text>
            </NavBar>
        );
    }
}