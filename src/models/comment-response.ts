interface HighlightResultField {
    matchLevel: string;
    matchedWords: string[];
    value: string;
}

interface HighlightResult {
    author: HighlightResultField;
    comment_text: HighlightResultField;
    story_title: HighlightResultField;
    story_url: HighlightResultField;
}

export interface CommentHit {
    _highlightResult: HighlightResult;
    _tags: string[];
    author: string;
    children: number[];
    comment_text: string;
    created_at: string;
    created_at_i: number;
    objectID: string;
    parent_id: number;
    story_id: number;
    story_title: string;
    story_url: string;
    updated_at: string;
}

interface RequestTiming {
    queue: number;
    roundTrip: number;
}

interface GetIdxLoadTiming {
    dicts: number;
    gens: number;
    total: number;
}

interface GetIdxTiming {
    load: GetIdxLoadTiming;
    total: number;
}

interface ProcessingTimingsMS {
    _request: RequestTiming;
    getIdx: GetIdxTiming;
    total: number;
}

interface Exhaustive {
    nbHits: boolean;
    typo: boolean;
}

export interface CommentResponse {
    exhaustive: Exhaustive;
    exhaustiveNbHits: boolean;
    exhaustiveTypo: boolean;
    hits: CommentHit[];
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
