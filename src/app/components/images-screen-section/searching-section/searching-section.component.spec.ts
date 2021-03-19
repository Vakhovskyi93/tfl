import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingSectionComponent } from './searching-section.component';

describe('SearchingSectionComponent', () => {
  let component: SearchingSectionComponent;
  let fixture: ComponentFixture<SearchingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
