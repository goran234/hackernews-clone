export interface SingleItem {
    id: number;
    author: string;
    text: string;
    created_at: string;
    created_at_i: number;
    parent_id: number;
    story_id: number;
    points: number;
    title: string;
    url: string;
    type: string;
    options: any[];
    children: SingleItem[];
}