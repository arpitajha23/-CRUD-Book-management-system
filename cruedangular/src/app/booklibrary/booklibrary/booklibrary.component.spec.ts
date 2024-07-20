import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklibraryComponent } from './booklibrary.component';

describe('BooklibraryComponent', () => {
  let component: BooklibraryComponent;
  let fixture: ComponentFixture<BooklibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooklibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooklibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
