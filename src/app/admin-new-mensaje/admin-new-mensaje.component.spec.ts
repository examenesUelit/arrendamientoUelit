import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewMensajeComponent } from './admin-new-mensaje.component';

describe('AdminNewMensajeComponent', () => {
  let component: AdminNewMensajeComponent;
  let fixture: ComponentFixture<AdminNewMensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewMensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
