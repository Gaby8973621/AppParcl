import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrconstanciasPage } from './registrconstancias.page';

describe('RegistrconstanciasPage', () => {
  let component: RegistrconstanciasPage;
  let fixture: ComponentFixture<RegistrconstanciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrconstanciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
