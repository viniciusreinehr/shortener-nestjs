import { Test, TestingModule } from '@nestjs/testing';
import { LinkController } from './link.controller';
import { LinkService } from '../services/link.service';

describe('LinkController', () => {
  let linkController: LinkController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LinkController],
      providers: [LinkService],
    }).compile();

    linkController = app.get<LinkController>(LinkController);
  });

  describe('root', () => {
    it('should return a Object', () => {
      const result = linkController.getHello();
      expect(JSON.stringify(result)).toBe(JSON.stringify({"message": "Encurtador!"}));
    });
  });
});
