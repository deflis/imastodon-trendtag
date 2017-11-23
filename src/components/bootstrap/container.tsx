import React from 'react';

export class Container extends React.Component<{fluid?: boolean}> {
    render() {
        let className = "container"
        if (this.props.fluid) {
            className += "-fluid"
        }
        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}

export namespace Container {
    export class Row extends React.Component {
        render() {
            return (
                <div className="row">{this.props.children}</div>
            );
        }
    }
    interface RowProps{
        option?: GridOption,
        size?: 1|2|3|4|5|6|7|8|9|10|11|12|"auto"
    }
    
    export enum GridOption {
        ExtraSmall = "",
        Small = "sm",
        Medium = "md",
        Large = "lg",
        ExtraLarge = "xl",
    }

    export class Column extends React.Component<RowProps>{
        render() {
            let className = "col";
            if (this.props.option) {
                className += "-" + this.props.option;
            }
            if (this.props.size) {
                className += "-" + this.props.size;
            }
            return (
                <div className={className}>
                    {this.props.children}
                </div>
            );
        }
    }
}