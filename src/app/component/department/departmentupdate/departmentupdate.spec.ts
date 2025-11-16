import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departmentupdate } from './departmentupdate';

describe('Departmentupdate', () => {
  let component: Departmentupdate;
  let fixture: ComponentFixture<Departmentupdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Departmentupdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Departmentupdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
