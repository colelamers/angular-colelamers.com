import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogComponent } from './blog/blog.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Hey it's Cole Lamers!"
    },
    {
        path: 'Blog',
        component: BlogComponent,
        title: "Blog of Cole Lamers"
    },
    {
        path: 'blog',
        component: BlogComponent,
        title: "Blog of Cole Lamers"
    },
    {
        path: 'Blog/:id',
        component: BlogPostComponent,
        title: "Blog of Cole Lamers"
    },
    {
        path: 'blog/:id',
        component: BlogPostComponent,
        title: "Blog of Cole Lamers"
    },
    {
        path: 'blog/:id',
        component: BlogPostComponent,
        title: "Blog of Cole Lamers"
    }
];
