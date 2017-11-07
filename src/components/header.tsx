import React from 'react';
import moment from "moment";

export interface HeaderProps {
    updatedAt: moment.Moment
}

export class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">トレンドタグ</a>
                <span className="navbar-text">更新時刻: {this.props.updatedAt.format("LLLL")}</span>
            </nav>
        );
    }
}