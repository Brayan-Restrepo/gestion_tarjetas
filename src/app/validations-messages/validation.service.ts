import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    console.log('validatorName', validatorName)
    let config = {
      'required': 'Requerido',
      'invalidCreditCard': 'Número de la tarjeta de crédito invalido',
      'invalidEmailAddress': 'Correo electrónico invalido',
      'invalidPassword': 'Contraseña invalida. La contraseña debe tener al menos 6 caracteres y contener un número.',
      'minlength': `Longitud mínima ${validatorValue.requiredLength}`,
      'maxlength': `Longitud mínima ${validatorValue.requiredLength}`,
      'pattern': `Campo invalidado`,
      'email': `Correo electrónico invalido`,
      'MatchPassword': 'La contraseña no coincide'
    };

    return config[validatorName];
  }
}
