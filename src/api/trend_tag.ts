interface _TrendTags {
    updated_at: string
    score: {[tag: string]: number}
}

import moment from "moment";


export class TrendTag {
    constructor(tag: string, score: number) {
        this.tag = tag
        this.score = score
    }
    tag: string
    score: number
}

export class TrendTags {
    constructor(trendTags: _TrendTags) {
        this.updatedAt = moment(trendTags.updated_at)
        this.tags = Object.keys(trendTags.score)
            .map(key => new TrendTag(key, trendTags.score[key]))
            .sort((tag1, tag2) => tag2.score - tag1.score)
    }
    updatedAt: moment.Moment
    tags: TrendTag[]
}

export async function get() {
    return new TrendTags({"updated_at": "2017-11-02T09:30:00Z", "score": {"tag1": 200, "tag2":1000, "tag3": 10}});
}