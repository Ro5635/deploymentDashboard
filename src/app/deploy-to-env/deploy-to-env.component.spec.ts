import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployToTestComponent } from './deploy-to-test.component';

describe('DeployToTestComponent', () => {
  let component: DeployToTestComponent;
  let fixture: ComponentFixture<DeployToTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeployToTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployToTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
