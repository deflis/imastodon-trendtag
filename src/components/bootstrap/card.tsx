import React from 'react';

interface CardPrpos {
    image?: {
        source: string,
        alt: string,
    }
}

export class Card extends React.Component<CardPrpos> {
    render() {
        let image = null
        if (this.props.image) {
            image = <img className="card-img-top" src={this.props.image.source} alt={this.props.image.alt} />
        }
        return (
            <div className="card">
                {image}
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export namespace Card {

    export class Title extends React.Component {
        render() {
            return (
                <h4 className="card-title">
                    {this.props.children}
                </h4>
            );
        }
    }
    export class Text extends React.Component {
        render() {
            return (
                <div className="card-text">
                    {this.props.children}
                </div>
            );
        }
    }
}