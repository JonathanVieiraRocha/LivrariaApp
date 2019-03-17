import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LivroListPage } from './livro-list';

@NgModule({
  declarations: [
    LivroListPage,
  ],
  imports: [
    IonicPageModule.forChild(LivroListPage),
  ],
})
export class LivroListPageModule {}
