import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoFavComponent } from './icono-fav.component';

describe('IconoFavComponent', () => {
  let component: IconoFavComponent;
  let fixture: ComponentFixture<IconoFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconoFavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconoFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
