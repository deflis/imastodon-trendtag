import axios from 'axios'

export interface TrendTags {
    updated_at: string
    score: {[tag: string]: number}
    //score_ex: {[tag: string]: number}
}

const axiosInstance = axios.create({
    baseURL: 'https://imastodon.net'
})

export default class Mastodon {

    static setHost(host: string) {

    }

    static async getTrendTags(): Promise<TrendTags> {
        const { data } = await axiosInstance.get("/api/v1/trend_tags");
        return data;
    }
}