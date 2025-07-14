import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAutocomplete } from './mat-autocomplete';

describe('MatAutocomplete', () => {
  let component: MatAutocomplete;
  let fixture: ComponentFixture<MatAutocomplete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatAutocomplete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatAutocomplete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
