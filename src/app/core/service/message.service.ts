import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  msgLog: string[] = [];

  constructor() { }

  addMsg(msg: string) {
    this.msgLog.push(msg);
  }

  clear() {
    this.msgLog = [];
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }
}
