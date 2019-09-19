import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InvserviceService } from '../invservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  constructor(public form: FormBuilder, private invList: InvserviceService,
              private route: ActivatedRoute, private router: Router, private dialog: MatDialog) {}
  public name1: string;
  public datanew;
  public res;
  public errmsg;
  public conflict = false;
    invForm = this.form.group({
      productname: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required, Validators.minLength(3)]],
      availableunits: ['', [ Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]],
      unitprice: ['', [ Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]],
      tags: [''],
      lastupated: ['' , [ Validators.required, Validators.pattern('[0-9]{2}-[0-9]{2}-[0-9]{4}') ]],
      location: this.form.group({
        area: [''],
        zone: [''],
        shelf: ['']
    }),
    description: ['', Validators.minLength(20)]
  });


    ngOnInit() {
      this.route.paramMap.subscribe(el => {
        this.name1 = el.get('productname');
        console.log(this.name1);
        this.invList.bsub.subscribe(data => {
        this.datanew = data.find(ele => {
        return ele.productname === this.name1;
         });
        if (this.datanew) {
          // console.log(this.datanew);
          this.invForm = this.form.group({
            productname: [this.datanew.productname, Validators.required],
            category: [this.datanew.category, [Validators.required, Validators.minLength(3)]],
            availableunits: [this.datanew.availableunits, Validators.required],
            unitprice: [this.datanew.unitprice, Validators.required],
            tags: [this.datanew.tags],
            lastupated: [this.datanew.lastupated],
            location: this.form.group({
              area: [this.datanew.location.area],
              zone: [this.datanew.location.zone],
              shelf: [this.datanew.location.shelf]
          }),
          description: [this.datanew.description]
        });


  }
});
});
}

setData() { // to get data from submit and insert
  this.invList.addInventory(this.invForm.value).subscribe(
    response => console.log('Success!',
   response),
  error => console.log('Error!', error));
  this.router.navigate(['/inventory/']);
}

updateData() { // to get data from update button and insert
  // this.conflict = true;
  console.log(this.invForm.value);
  this.invList.editInventory({... this.datanew, ... this.invForm.value}).subscribe(
    response => console.log('Success!', response),
    error => { console.log('Error!', error);
               const dialogConfig = new MatDialogConfig();
               this.dialog.open(DialogComponent, dialogConfig);
               dialogConfig.disableClose = true;
               dialogConfig.width = '60%'; });
  // if ( this.errmsg) {


  // }
  this.router.navigate(['/inventory/']);
}



}
