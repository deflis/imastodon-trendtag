import React from 'react';
import { Theme, Color } from './index';

interface NavBarProps {
    theme?: Theme
    bg?: Color
}

export class NavBar extends React.Component<NavBarProps> {
    render() {
        let className = "navbar";
        if (this.props.theme) {
            className += " navbar-" + this.props.theme;
        }
        if (this.props.bg) {
            className += " bg-" + this.props.bg;
        }
        return (
            <nav className={className}>
                {this.props.children}
            </nav>
        );
    }

}

export module NavBar {
    export class Brand extends React.Component<{href: string}> {
        render() {
            return (
                <a className="navbar-brand" href={this.props.href}>{this.props.children}</a>
            );
        }
    }
    export class Text extends React.Component {
        render() {
            return (
                <span className="navbar-text">{this.props.children}</span>
            );
        }
    }
}