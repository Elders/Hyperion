import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './user/user.component';
import {AboutComponent} from './components/about.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AggregateListingComponent} from './aggregate-listing/aggregate-listing.component';

const appRoutes: Routes = [
    {
        path:'',
        component: HomePageComponent
    },
    {
        path:'aggregate',
        component: AggregateListingComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    { 
        path: 'lazy',
        loadChildren: './lazy/lazy.module#LazyModule' 
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);