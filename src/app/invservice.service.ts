import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Iinventory } from './inventoryinterface';
import {  BehaviorSubject, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import * as uuid from 'uuid';
import { element } from 'protractor';
import { throwError } from 'rxjs';
// import 'rxjs/add/operator/catch' ;
// import 'rxjs/add/observable/throw' ;
// import ErrorHandler from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InvserviceService {
  [x: string]: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  public url = ' http://localhost:3000/inventories';
  constructor(private http: HttpClient) {
    this.load();
  }
  public initdata = [];
  public datanew = [];
  public num: number;
  public bsub = new BehaviorSubject<Iinventory[]>(this.initdata);
  load() {
    this.http.get<Iinventory[]>(this.url).subscribe(data => {
      this.initdata = data;
      this.bsub.next(this.initdata);
    });
  }


  addInventory(invList) {
    const obj = Object.assign({}, invList);
    obj.id = uuid.v4();
    return this.http.post<any>(this.url, obj, this.httpOptions ).pipe(
      tap( (el) => {this.initdata.push(el);  // copying the data which is being posted
                    this.bsub.next(this.initdata);
      })
      );
    }
    // .pipe(
    // catchError(this.handleError('addInventory'))
    // );
    editInventory(ele) {
      // console.log(ele);
      for ( let i = 0; i < this.initdata.length; i++) {
        if ( this.initdata[i].id === ele.id ) {
          this.initdata[i] = ele;
        }
      }
      this.bsub.next(this.initdata);
      return this.http.put<any>(this.url + '/'  + ele.id, ele, this.httpOptions ).pipe(
        catchError(this.errorHandler));
      }
      errorHandler(error: HttpErrorResponse) {
       return throwError('errmsg: ' + error.message || 'server error');

    }
  }
