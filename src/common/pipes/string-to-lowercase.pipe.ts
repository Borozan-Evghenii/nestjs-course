import { Injectable, type PipeTransform } from '@nestjs/common';

@Injectable()
export class StringToLowercasePipe implements PipeTransform {
  transform(value: string) {
    if (typeof value === 'string') {
      value = value.toLocaleLowerCase();
    }
    return value;
  }
}

// To use it need to add decorator over controller method
// @UsePipes(StringToLowercasePipe)
// it will run before data come in controller like a small middleware
