import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditZaposleniComponent } from './add-edit-zaposleni.component';

describe('AddEditZaposleniComponent', () => {
  let component: AddEditZaposleniComponent;
  let fixture: ComponentFixture<AddEditZaposleniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditZaposleniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditZaposleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
