import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogButtonComponent } from './blog-button.component';

describe('BlogButtonComponent', () => {
  let component: BlogButtonComponent;
  let fixture: ComponentFixture<BlogButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
