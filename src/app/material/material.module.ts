import { NgModule } from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatPaginatorModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatDialogModule} from '@angular/material';
const MaterialComponents = [ MatDialogModule, MatInputModule, MatTableModule,
  MatButtonModule, MatSortModule, MatPaginatorModule, MatFormFieldModule ] ;

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
