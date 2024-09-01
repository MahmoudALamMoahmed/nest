import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {
  tags = [
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
  constructor() {}

  getAllTags() {
    return this.tags;
  }
  getById(id) {
    const tag = this.tags.find((ele) => ele.id === id);
    if (tag) {
      return { id:tag.id ,  name: tag.name };
    } else {
      return { message: 'Tag not found' };
    }
  }
  addTag(tag: { id: number; name: string }) {
    this.tags.push(tag);
    return { message: 'added', tags: this.tags };
  }

  deleteTag(id: number) {
    const tag = this.tags.findIndex((ele) => ele.id === id);
    const deletedTag = this.tags.splice(tag, 1);
    return { message: 'deleted', tag: deletedTag };
  }

  updateTag(id:number , updatedTag:{name:string}) {
    const tag = this.tags.findIndex((ele) => ele.id === id);
    this.tags[tag].name = updatedTag.name; 
    return { message: 'updated', tag:this.tags[tag] };
  }
}
