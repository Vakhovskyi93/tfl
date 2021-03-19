import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesScreenSectionComponent } from './images-screen-section.component';

describe('ImagesScreenSectionComponent', () => {
  let component: ImagesScreenSectionComponent;
  let fixture: ComponentFixture<ImagesScreenSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesScreenSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesScreenSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
