import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentupdate } from './studentupdate';

describe('Studentupdate', () => {
  let component: Studentupdate;
  let fixture: ComponentFixture<Studentupdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentupdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentupdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
