import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
} from "@angular/material";
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppComponent } from "./app.component";
import { CardComponent } from "./dashboard/card/card.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoadingComponent } from "./dashboard/loading/loading.component";
import { FakeApiService } from "./fake-api.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeApiService, { delay: 5000 }),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    LoadingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
