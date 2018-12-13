import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelMensajesComponent } from './user-panel-mensajes.component';

describe('UserPanelMensajesComponent', () => {
  let component: UserPanelMensajesComponent;
  let fixture: ComponentFixture<UserPanelMensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelMensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
