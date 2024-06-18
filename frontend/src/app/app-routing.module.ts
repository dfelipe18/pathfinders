import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationModule } from './presentation/presentation.module';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./presentation/presentation.module').then(
        m => m.PresentationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
