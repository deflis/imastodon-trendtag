import React from 'react';
import { TrendTag } from '../api/trend_tag';

export interface TagProps {
    tag: TrendTag
}

export class Tag extends React.Component<TagProps> {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">#{this.props.tag.tag}</h4>
                    <p className="card-text">スコア: {this.props.tag.score}</p>
                    <a href="#" className="btn btn-primary">Show #{this.props.tag.tag}</a>
                </div>
            </div>
        );
    }
}