import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelLiderComponent } from './user-panel-lider.component';

describe('UserPanelLiderComponent', () => {
  let component: UserPanelLiderComponent;
  let fixture: ComponentFixture<UserPanelLiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPanelLiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPanelLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
