import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );
