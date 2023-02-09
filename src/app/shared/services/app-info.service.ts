import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Cadviewer Testapp Devextreme 01';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
