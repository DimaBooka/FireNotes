import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { FieldValidatorComponent } from './field-validator/field-validator.component';
import { FirebaseInteractionService } from './services/firebase-interaction.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ColorPickerComponent,
    FieldValidatorComponent,
  ],
  exports: [
    ColorPickerComponent,
    FieldValidatorComponent,
  ],
  providers: [
    FirebaseInteractionService
  ]
})
export class SharedModule { }
