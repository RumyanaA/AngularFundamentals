import { TestBed } from '@angular/core/testing';

import { PostsService } from './services/posts.service';

describe('PostsServiceService', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});