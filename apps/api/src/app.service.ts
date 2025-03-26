import { Injectable } from '@nestjs/common';
import { add } from 'library';

@Injectable()
export class AppService {
  add(): string {
    return add(1, 2).toString();
  }
}
