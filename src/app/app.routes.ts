import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

// Route Configuration
export const routes: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'movie/:id', component: MovieComponent },
    { path: 'watchlist', component: WatchlistComponent}
];

export const appRoutingProvider: ModuleWithProviders = RouterModule.forRoot(routes);