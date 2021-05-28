import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show email input', () => {
    expect(fixture.nativeElement.querySelector('[data-test="inputEmailLogar"]')).toBeTruthy();
  });
  it('should show password input', () => {
    expect(fixture.nativeElement.querySelector('[data-test="inputPasswordLogar"]')).toBeTruthy();
  });
  it('should show logar button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="buttonLogar"]')).toBeTruthy();
  });
});
