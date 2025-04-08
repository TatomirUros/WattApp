import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowZaposleniComponent } from './show-zaposleni.component';

describe('ShowZaposleniComponent', () => {
  let component: ShowZaposleniComponent;
  let fixture: ComponentFixture<ShowZaposleniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowZaposleniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowZaposleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
