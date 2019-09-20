import { Component, OnInit, Inject } from '@angular/core';
import { InvserviceService } from '../invservice.service';
import { AddInventoryComponent } from '../add-inventory/add-inventory.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    }


}
