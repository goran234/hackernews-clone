import type {PostResponse} from "@/models/post-response";
import type {CommentResponse} from "@/models/comment-response";
import type {SingleItem} from "@/models/single-item";

const BASE_URL = 'https://hn.algolia.com/api/v1/';
const SEARCH_URL = BASE_URL + 'search?';

export class BackendApi {

    static async getPosts(payload: {tags: string, page: number, hitsPerPage: number, query: string}): Promise<PostResponse> {
        const serializedParams = this.serializeParams(payload);
        const response = await fetch( SEARCH_URL + serializedParams);
        const data = await response.json();
        return data;
    }

    private static serializeParams(payload: { [key: string]: string | number }): string {
        return Object.entries(payload)
            .filter(([key, value]) =>  key && value)
            .map(([key, value]) => {
            return `${key}=${value}`;
        })
            .join('&');
    }

    static async getComments(id: number): Promise<CommentResponse> {
        const serializedParams = this.serializeParams({tags: 'comment,story_' + id});
        const response = await fetch(SEARCH_URL + serializedParams);
        const data = await response.json();
        return data;
    }

    static async singleItem(id: number | string): Promise<SingleItem> {
        const response = await fetch(BASE_URL + `items/${id}`);
        const data = await response.json();
        return data;
    }
}

