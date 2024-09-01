import { TagsService } from './tags.service';
import { TagsDto } from 'src/TagDto/tags.dto';
export declare class TagsController {
    private readonly _tagsService;
    constructor(_tagsService: TagsService);
    getAllTags(): {
        name: string;
        id: number;
    }[];
    getTagById(id: number): {
        id: number;
        name: string;
        message?: undefined;
    } | {
        message: string;
        id?: undefined;
        name?: undefined;
    };
    addTag(tagDto: TagsDto): {
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
    updateTag(id: number, tagsDto: TagsDto): {
        message: string;
        tag: {
            name: string;
            id: number;
        };
    };
}
