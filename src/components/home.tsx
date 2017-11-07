import React from 'react';
import { TrendTags } from '../api/trend_tag';
import { Header } from './header.tsx';
import { Tag } from './tag.tsx';

export interface HomeProps {
    trendTags: TrendTags
}

export class Home extends React.Component<HomeProps> {
    render() {
        let child = this.props.trendTags.tags.map(x => <Tag tag={x} />)

        return (
            <div>
                <Header updatedAt={this.props.trendTags.updatedAt} />
                {child}
            </div>
        );
    }
}