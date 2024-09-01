export declare class TagsService {
    tags: {
        name: string;
        id: number;
    }[];
    constructor();
    getAllTags(): {
        name: string;
        id: number;
    }[];
    getById(id: any): {
        id: number;
        name: string;
        message?: undefined;
    } | {
        message: string;
        id?: undefined;
        name?: undefined;
    };
    addTag(tag: {
        id: number;
        name: string;
    }): {
        message: string;
        tags: {
            name: string;
            id: number;
        }[];
    };
    deleteTag(id: number): {
        message: string;
        tag: {
            name: string;
            id: number;
        }[];
    };
    updateTag(id: number, updatedTag: {
        name: string;
    }): {
        message: string;
        tag: {
            name: string;
            id: number;
        };
    };
}
