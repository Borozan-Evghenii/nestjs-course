import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class LoggerMidleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    return next;
  }
}
