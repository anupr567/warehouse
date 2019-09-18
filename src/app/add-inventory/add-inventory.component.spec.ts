import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddInventoryComponent } from './add-inventory.component';
import { ReactiveFormsModule, FormsModule, RequiredValidator } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule, MatHeaderCell, MatCell } from '@angular/material';

describe('AddInventoryComponent', () => {
  let component: AddInventoryComponent;
  let fixture: ComponentFixture<AddInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInventoryComponent ],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule,
         HttpClientTestingModule,
        MatFormFieldModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.invForm.valid).toBeFalsy();
  });

  it('productname field validity', () => {
  const name = component.invForm.controls.productname;
  expect(name.invalid).toBeTruthy();

  let errors = {};
  errors = name.errors || {} ;
  // tslint:disable-next-line: no-string-literal
  expect(errors['required']).toBeTruthy();
});

  it('category field validity', () => {
  const cat = component.invForm.controls.category;
  expect(cat.invalid).toBeTruthy();

  let errors = {};
  errors = cat.errors || {} ;
  // tslint:disable-next-line: no-string-literal
  expect(errors['required']).toBeTruthy();
});

  it('availableunits field validity', () => {
  const units = component.invForm.controls.availableunits;
  expect(units.valid).toBeFalsy();

  let errors = {};
  errors = units.errors || {};
  // tslint:disable-next-line: no-string-literal
  expect(errors['required']).toBeTruthy();

  units.setValue('0');
  errors = units.errors || {};
  // tslint:disable-next-line: no-string-literal
  expect(errors['min']).toBeTruthy();

  units.setValue('-3');
  errors = units.errors || {};
  // tslint:disable-next-line: no-string-literal
  expect(errors['pattern']).toBeTruthy();
  });

  it('unitprice field validity', () => {
    const unitprice = component.invForm.controls.unitprice;
    expect(unitprice.valid).toBeFalsy();

    let errors = {};
    errors = unitprice.errors || {};
    // tslint:disable-next-line: no-string-literal
    expect(errors['required']).toBeTruthy();

    unitprice.setValue('0');
    errors = unitprice.errors || {};
    // tslint:disable-next-line: no-string-literal
    expect(errors['min']).toBeTruthy();

    unitprice.setValue('-3');
    errors = unitprice.errors || {};
    // tslint:disable-next-line: no-string-literal
    expect(errors['pattern']).toBeTruthy();
  });

  it('emit a error msg if the form validation works', () => {
    expect(component.invForm.valid).toBeFalsy();
    component.invForm.controls.productname.setValue('cammado');
    component.invForm.controls.category.setValue('ahjkaa');
    component.invForm.controls.availableunits.setValue('56');
    component.invForm.controls.unitprice.setValue('2966363');
    component.invForm.controls.tags.setValue('adda', 'dss');
    component.invForm.controls.lastupated.setValue('02-01-2017');
    // tslint:disable-next-line: no-string-literal
    component.invForm.controls.location['controls'].area.setValue('qwqw');
    // tslint:disable-next-line: no-string-literal
    component.invForm.controls.location['controls'].zone.setValue('sfsf');
    // tslint:disable-next-line: no-string-literal
    component.invForm.controls.location['controls'].shelf.setValue('vnvbxbnxc');
    expect(component.invForm.valid).toBeTruthy();
  });


});
