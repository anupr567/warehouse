import { Component, OnInit, ViewChild } from '@angular/core';
import { InvserviceService } from '../invservice.service';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  public dataSource;
  displayedColumns: string[] = ['productname', 'category',  'availableunits', 'unitprice', 'tags', 'lastupated', 'location', 'description'];
  // dataSource = this.inventories;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private invlist: InvserviceService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.invlist.bsub.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }
onClick() {
  this.router.navigate(['/inventory/input']);
}
applyFilter(filterValue: string) {
this.dataSource.filter = filterValue.trim().toLowerCase();
}
// editinv(el) {
//   this.router.navigate(['/inventory/input', el.productname ]);

// }
}

