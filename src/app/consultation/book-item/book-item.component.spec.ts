import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemComponent } from './book-item.component';
import { Book } from 'src/app/shared/book';

describe('BookItemComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;
    component.model = new Book();
    component.model.id = 1;
    component.model.title = 'Title';
    component.model.description = 'Description';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title of book', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain(
      component.model.title
    );
  });
});
