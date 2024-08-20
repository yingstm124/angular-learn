import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoFeatureModule } from './todo-feature/todo-feature.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { platformBrowser } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    TodoFeatureModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowser().bootstrapModule(AppModule);
