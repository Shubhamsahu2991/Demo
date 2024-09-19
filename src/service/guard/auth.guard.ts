import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);

  const loggedUser = userService.getLoggedInUsername(); // Get the logged in username from the UserService
  if (loggedUser != '') {
    return true;
  } else {
    router.navigate(['/g2glogin']);
    return false;
  }
};
