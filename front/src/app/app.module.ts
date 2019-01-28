import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { NewreleasesComponent } from './components/newreleases/newreleases.component';
import { NewsComponent } from './components/news/news.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CleanupPipe } from './pipes/cleanup.pipe';
import { ArtistComponent } from './components/artist/artist.component';
import { TrimstringPipe } from './pipes/trimstring.pipe';

const appRoutes = [
  {path: "", component: HomeComponent},
  {path: "reviews", component: ReviewsComponent},
  {path: "new", component: NewreleasesComponent},
  {path: "news", component: NewsComponent},
  {path: "charts", component: ChartsComponent},
  {path: "artist/:artist", component: ArtistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewsComponent,
    SearchbarComponent,
    NewreleasesComponent,
    NewsComponent,
    ChartsComponent,
    CleanupPipe,
    ArtistComponent,
    TrimstringPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    HttpModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
