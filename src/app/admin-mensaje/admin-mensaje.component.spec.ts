import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMensajeComponent } from './admin-mensaje.component';

describe('AdminMensajeComponent', () => {
  let component: AdminMensajeComponent;
  let fixture: ComponentFixture<AdminMensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
