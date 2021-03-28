import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekersuccessComponent } from './jobseekersuccess.component';

describe('JobseekersuccessComponent', () => {
  let component: JobseekersuccessComponent;
  let fixture: ComponentFixture<JobseekersuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekersuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
