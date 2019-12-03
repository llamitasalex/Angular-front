import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { searchComponent } from './search.component';

describe('ProfileComponent', () => {
  let component: searchComponent;
  let fixture: ComponentFixture<searchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ searchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(searchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
