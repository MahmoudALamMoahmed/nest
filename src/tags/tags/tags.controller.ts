import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  ValidationPipe,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsDto } from 'src/TagDto/tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly _tagsService: TagsService) {}

  @Get()
  getAllTags() {
    return this._tagsService.getAllTags();
  }
  @Get(':id')
  getTagById(@Param('id', ParseIntPipe) id: number) {
    return this._tagsService.getById(id);
  }

  @Post()
  addTag(@Body(new ValidationPipe()) tagDto: TagsDto) {
    return this._tagsService.addTag(tagDto);
  }

  @Delete(':id')
  deleteTag(@Param('id', ParseIntPipe) id: number) {
    return this._tagsService.deleteTag(id);
  }

  @Put(':id')
  updateTag(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) tagsDto: TagsDto,
  ) {
    return this._tagsService.updateTag(id, tagsDto);
  }
}
