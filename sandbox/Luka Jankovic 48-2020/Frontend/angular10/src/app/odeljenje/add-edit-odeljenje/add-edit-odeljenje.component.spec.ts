import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddEditOdeljenjeComponent } from './add-edit-odeljenje.component';

describe('AddEditOdeljenjeComponent', () => {
  let component: AddEditOdeljenjeComponent;
  let fixture: ComponentFixture<AddEditOdeljenjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOdeljenjeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditOdeljenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
