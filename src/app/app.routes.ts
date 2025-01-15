import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './blog/services/blog.service';
import { ErrorComponent } from './error/error.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Cole Lamers"
    },
    {
        path: 'Blog',
        component: BlogComponent,
        title: "Cole Lamers Blog Posts"
    },
    {
        path: 'blog',
        redirectTo: "Blog",
        pathMatch: "full"
    },
    {
        path: 'Blog/:id',
        component: BlogPostComponent,
        title: "Just a thought of Cole Lamers",
        data: BlogService
    },
    {
        path: 'blog/:id',
        redirectTo: "Blog/:id",
        pathMatch: "full"
    },
    // Catch-all route for undefined paths
    { 
        path: '**', 
        component: ErrorComponent 
    }
];
