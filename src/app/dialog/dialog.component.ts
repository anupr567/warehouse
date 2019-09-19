import { Component, OnInit } from '@angular/core';
import { InvserviceService } from '../invservice.service';
import { AddInventoryComponent } from '../add-inventory/add-inventory.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private invList: InvserviceService, private router: Router) { }

  ngOnInit() {

    }


}
