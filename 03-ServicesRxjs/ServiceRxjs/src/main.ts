import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop' }) // stop angular from running change detection
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
