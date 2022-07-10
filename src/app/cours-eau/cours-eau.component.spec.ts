import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursEauComponent } from './cours-eau.component';

describe('CoursEauComponent', () => {
  let component: CoursEauComponent;
  let fixture: ComponentFixture<CoursEauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursEauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
