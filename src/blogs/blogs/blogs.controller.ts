import { Controller, Get } from '@nestjs/common';

@Controller('blogs')
export class BlogsController {
  @Get()
  getBlogs() {
    return 'Hello From Blogs';
  }
  @Get('/1')
  getBlog() {
    return 'Hello From Blog1';
  }
}
