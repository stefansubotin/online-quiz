import { Injectable } from '@nestjs/common';

@Injectable()
export class HomepageService {
  getHello(): HTMLElement {
    var ele = new HTMLElement;
    ele.innerHTML = "Test Element";
    return ele;
  }
}
