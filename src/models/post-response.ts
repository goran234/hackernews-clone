export interface HighlightResult {
    matchLevel: string;
    matchedWords: string[];
    value: string;
}

export interface PostHit {
    _highlightResult: {
        author: HighlightResult;
        title: HighlightResult;
        url: HighlightResult;
    };
    _tags: string[];
    author: string;
    children: number[];
    created_at: string;
    created_at_i: number;
    num_comments: number;
    objectID: string;
    points: number;
    story_id: number;
    title: string;
    updated_at: string;
    url: string;
}

export interface ProcessingTimingsMS {
    _request: {
        roundTrip: number;
    };
    afterFetch: {
        format: {
            total: number;
        };
    };
    fetch: {
        scanning: number;
        total: number;
    };
    total: number;
}

export interface Exhaustive {
    nbHits: boolean;
    typo: boolean;
}

export interface PostResponse {
    exhaustive: Exhaustive;
    exhaustiveNbHits: boolean;
    exhaustiveTypo: boolean;
    hits: PostHit[];
    hitsPerPage: number;
    nbHits: number;
    nbPages: number;
    page: number;
    params: string;
    processingTimeMS: number;
    processingTimingsMS: ProcessingTimingsMS;
    query: string;
    serverTimeMS: number;
}
