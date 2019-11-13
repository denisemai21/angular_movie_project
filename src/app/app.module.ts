import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Http, Headers } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';

import { MoviesService } from './services/movies.service';

import { appRoutingProvider } from './app.routes';
import { MovieComponent } from './components/movie/movie.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchcriteriaComponent } from './searchcriteria/searchcriteria.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    NavigationComponent,
    SearchcriteriaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule,
    appRoutingProvider
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
