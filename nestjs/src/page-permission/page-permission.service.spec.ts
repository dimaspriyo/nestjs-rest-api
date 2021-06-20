import { Test, TestingModule } from '@nestjs/testing';
import { PagePermissionService } from './page-permission.service';

describe('PagePermissionService', () => {
  let service: PagePermissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagePermissionService],
    }).compile();

    service = module.get<PagePermissionService>(PagePermissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
