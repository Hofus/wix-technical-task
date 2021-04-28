import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecursiveNodesComponent} from 'src/app/recursive-nodes/components/recursive-nodes/recursive-nodes.component';

const routes: Routes = [
  {path: '', component: RecursiveNodesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursiveNodesRoutingModule {
}
