import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'Blog',
        component: BlogPostComponent
    },
    {
        path: 'blog',
        component: BlogPostComponent
    }
];
