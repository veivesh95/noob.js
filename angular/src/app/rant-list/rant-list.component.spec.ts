import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RantListComponent } from './rant-list.component';

describe('RantListComponent', () => {
  let component: RantListComponent;
  let fixture: ComponentFixture<RantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
