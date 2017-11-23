
import moment from "moment";

import Mastodon, { TrendTags as _TrendTags } from "./mastodon"

export class TrendTag {
    constructor(tagName: string, score: number) {
        this.tagName = tagName
        this.score = score
    }
    tagName: string
    score: number
}

export class TrendTags {
    constructor(trendTags: _TrendTags) {
        this.updatedAt = moment(trendTags.updated_at);
        this.tags = Object.keys(trendTags.score)
            .map(key => new TrendTag(key, trendTags.score[key]))
            .sort((tag1, tag2) => tag2.score - tag1.score);
        this.extra_tags = Object.keys(trendTags.score_ex)
            .map(key => new TrendTag(key, trendTags.score_ex[key]))
            .sort((tag1, tag2) => tag2.score - tag1.score);
    }
    updatedAt: moment.Moment
    tags: TrendTag[]
    extra_tags: TrendTag[]
}

/**
 * トレンドタグを取得する
 */
export async function get(): Promise<TrendTags> {
    return new TrendTags(await Mastodon.getTrendTags());
}

/**
 * ダミーデータを取得する
 */
export async function getTestData(): Promise<TrendTags> {
    return new TrendTags({
        "updated_at": "2017-11-02T09:30:00Z",
        "score": {
            "デレパ": 200,
            "とは": 1000,
            "まりえさゆり": 10,
            "いえすっパーティータイム": 50,
            "スーパーに売ってる4つか3つ入ってて必要以上にしっとりしてるオールドファッションみたいなドーナツ": 20,
            "tag1": 1,
            "tag2": 2,
            "tag3": 3,
            "tag4": 4,
            "tag5": 5,
            "tag6": 6,
            "tag7": 7,
            "tag8": 8,
            "tag9": 9,
        },
        "score_ex": {
            "デレパ": 1000,
            "とは": 500,
            "まりえさゆり": 100,
            "いえすっパーティータイム": 50,
            "スーパーに売ってる4つか3つ入ってて必要以上にしっとりしてるオールドファッションみたいなドーナツ": 1,
            "tag1": 1,
            "tag2": 2,
            "tag3": 3,
            "tag4": 4,
            "tag5": 5,
            "tag6": 6,
            "tag7": 7,
            "tag8": 8,
            "tag9": 9,
        }
    });
}