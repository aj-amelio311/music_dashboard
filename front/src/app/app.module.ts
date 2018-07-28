import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { NewreleasesComponent } from './components/newreleases/newreleases.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NewsComponent } from './components/news/news.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ArtistComponent } from './components/artist/artist.component';
import { FormatPipe } from './pipes/format.pipe';
import { TrimspacePipe } from './pipes/trimspace.pipe';

const routes = [
  {path: "", component: HomeComponent},
  {path: "charts", component: ChartsComponent},
  {path: "news", component: NewsComponent},
  {path: "reviews", component: ReviewsComponent},
  {path: "new-releases", component: NewreleasesComponent},
  {path: "artist/:artistName", component: ArtistComponent},
  {path: "**", component: NotfoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ReviewsComponent,
    NewreleasesComponent,
    ChartsComponent,
    NewsComponent,
    NotfoundComponent,
    ArtistComponent,
    FormatPipe,
    TrimspacePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
