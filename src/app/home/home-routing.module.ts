import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'feed',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/feed/feed.module').then( m => m.FeedPageModule)
          }
        ]
      },
     
     
      {
        path:'post',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/post/post.module').then( m => m.PostPageModule)
          }
        ]
      },
      {
        path:'profile',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
