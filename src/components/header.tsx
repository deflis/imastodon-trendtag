import React from 'react';
import moment from "moment";
import { NavBar } from './bootstrap/navbar';
import { Theme, Color } from './bootstrap/index';

export interface HeaderProps {
    updatedAt?: moment.Moment
}

export class Header extends React.Component<HeaderProps> {
    render() {
        const updateTime = this.props.updatedAt ? this.props.updatedAt.format("LLLL") : "NULL"
        return (
            <header>
                <NavBar theme={Theme.Dark} bg={Color.Dark} placement={NavBar.Placement.StickyTop}>
                    <NavBar.Brand href="#">トレンドタグ</NavBar.Brand>
                    <NavBar.Text>更新時刻: {updateTime}</NavBar.Text>
                </NavBar>
            </header>
        );
    }
}