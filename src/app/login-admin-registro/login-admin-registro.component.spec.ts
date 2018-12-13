import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdminRegistroComponent } from './login-admin-registro.component';

describe('LoginAdminRegistroComponent', () => {
  let component: LoginAdminRegistroComponent;
  let fixture: ComponentFixture<LoginAdminRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAdminRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdminRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
