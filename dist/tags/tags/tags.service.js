"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
let TagsService = class TagsService {
    constructor() {
        this.tags = [
            {
                name: 'Mostafa',
                id: 1,
            },
            {
                name: 'Mohamed',
                id: 2,
            },
            {
                name: 'Ahmed',
                id: 3,
            },
            {
                name: 'Ali',
                id: 4,
            },
        ];
    }
    getAllTags() {
        return this.tags;
    }
    getById(id) {
        const tag = this.tags.find((ele) => ele.id === id);
        if (tag) {
            return { id: tag.id, name: tag.name };
        }
        else {
            return { message: 'Tag not found' };
        }
    }
    addTag(tag) {
        this.tags.push(tag);
        return { message: 'added', tags: this.tags };
    }
    deleteTag(id) {
        const tag = this.tags.findIndex((ele) => ele.id === id);
        const deletedTag = this.tags.splice(tag, 1);
        return { message: 'deleted', tag: deletedTag };
    }
    updateTag(id, updatedTag) {
        const tag = this.tags.findIndex((ele) => ele.id === id);
        this.tags[tag].name = updatedTag.name;
        return { message: 'updated', tag: this.tags[tag] };
    }
};
exports.TagsService = TagsService;
exports.TagsService = TagsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TagsService);
//# sourceMappingURL=tags.service.js.map