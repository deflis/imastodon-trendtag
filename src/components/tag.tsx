import React from 'react';
import { TrendTag } from '../api/trend_tag';
import { ButtonLink } from './bootstrap/button';
import { Color } from './bootstrap/index';
import { Card } from './bootstrap/card';

export interface TagProps {
    tag: TrendTag
}

export class Tag extends React.Component<TagProps> {
    render() {
        let shortTagName = this.props.tag.tagName.length > 12 ? this.props.tag.tagName.substring(0, 10) + "..." : this.props.tag.tagName;
        return (
            <Card>
                <Card.Title>#{this.props.tag.tagName}</Card.Title>
                <Card.Text>スコア: {this.props.tag.score}</Card.Text>
                <ButtonLink color={Color.Primary} href={`https://imastodon.net/web/timelines/tag/${this.props.tag.tagName}`}>
                    Show #{shortTagName}
                </ButtonLink>
                <ButtonLink color={Color.Secondary} href={`https://imastodon.net/tags/${this.props.tag.tagName}`}>
                    Tag view #{shortTagName}
                </ButtonLink>
            </Card>
        );
    }
}