import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const loggedUser= localStorage.getItem('user');
 
  if(loggedUser)
  {
    return true;
  }
  else
  {
  router.navigateByUrl('/login');
  return false;
  }
};
