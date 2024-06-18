import { environment } from './environments/environment';

import('./bootstrap').catch(err => {
  if (!environment.production) {
    console.error(err);
  }
});
