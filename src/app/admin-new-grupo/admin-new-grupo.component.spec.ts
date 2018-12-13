import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewGrupoComponent } from './admin-new-grupo.component';

describe('AdminNewGrupoComponent', () => {
  let component: AdminNewGrupoComponent;
  let fixture: ComponentFixture<AdminNewGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
