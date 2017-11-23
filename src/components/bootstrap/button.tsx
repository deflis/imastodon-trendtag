import React from 'react';
import { Color } from './index';

interface ButtonProps {
    color: Color
    outline?: boolean
    size?: Button.Size

    active?: boolean
    disabled?: boolean
}
interface ButtonLinkProps extends ButtonProps {
    href: string
}

function createClassName(props: ButtonProps) {
    let className = "btn btn-";
    if (props.outline) {
        className += "outline-";
    }
    className += props.color;
    if (props.size) {
        className += " btn-" + props.size;
    }
    if (props.active) {
        className += " active";
    }
    if (props.disabled) {
        className += " disabled";
    }
    return className;
}

export class Button extends React.Component<ButtonLinkProps> {
    render() {
        return (
            <a className={createClassName(this.props)} href={this.props.href}>
                {this.props.children}
            </a>
        );
    }
}

export class ButtonLink extends React.Component<ButtonLinkProps> {
    render() {
        return (
            <a className={createClassName(this.props)} href={this.props.href} role="button" aria-disabled={this.props.disabled}>
                {this.props.children}
            </a>
        );
    }
}

export namespace Button {
    export enum Size {
        Large = "lg",
        Small = "sm",
    }
}
