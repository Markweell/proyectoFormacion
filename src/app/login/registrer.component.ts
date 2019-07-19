import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

declare function init_plugins();

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./login.component.scss']
})
export class RegistrerComponent implements OnInit {

  forma: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    init_plugins();
    this.forma = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      agreeTerms: [false, [Validators.required, Validators.requiredTrue]]
    });

    this.forma.setValue({
      name: 'Test',
      email: 'test@test.com',
      password: '12345',
      password2: '12345',
      agreeTerms: true
    });

    this.forma.setValidators(this.sonIguales());
  }
  get password() {
    return this.forma.get('password').value;
  }
  get password2() {
    return this.forma.get('password2').value;
  }

  sonIguales(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      return (this.password !== this.password2) ? {'sonIguales': {value: control.value}} : null;
    };
  }

  createAccount() {
    console.log('formulario', this.forma);
  }
}
