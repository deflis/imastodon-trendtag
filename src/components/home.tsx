import React from 'react';
import { TrendTags } from '../api/trend_tag';

import { Tag } from './tag';
import { Container } from './bootstrap/container';

export interface HomeProps {
    trendTags: TrendTags
}

export class Home extends React.Component<HomeProps> {
    render() {
        let tags = this.props.trendTags.tags.slice(0, 10).map(tag =>
            <Container.Column option={Container.GridOption.Small} size={3}><Tag tag={tag} /></Container.Column>
        )
        return (
            <Container fluid>
                <Container.Row>
                    <Container.Column option={Container.GridOption.Large}>
                        <h2>現在のトレンドタグ</h2>
                        <Container fluid>
                            <Container.Row>
                                {tags}
                            </Container.Row>
                        </Container>
                    </Container.Column>
                </Container.Row>
            </Container>
        );
    }
}