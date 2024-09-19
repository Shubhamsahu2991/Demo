// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedInUsername: string = '';

  setLoggedInUsername(username: string): void {
    this.loggedInUsername = username;
  }

  getLoggedInUsername(): string {
    return this.loggedInUsername;
  }
}
