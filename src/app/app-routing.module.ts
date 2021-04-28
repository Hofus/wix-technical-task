import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'recursive',
    loadChildren: () => import('./recursive-nodes/recursive-nodes.module').then(m => m.RecursiveNodesModule),
  },
  {
    path: 'iterative',
    loadChildren: () => import('./iterative-nodes/iterative-nodes.module').then(m => m.IterativeNodesModule),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
