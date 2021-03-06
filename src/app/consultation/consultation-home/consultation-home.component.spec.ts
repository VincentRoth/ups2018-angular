import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationHomeComponent } from './consultation-home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConsultationHomeComponent', () => {
  let component: ConsultationHomeComponent;
  let fixture: ComponentFixture<ConsultationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultationHomeComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
