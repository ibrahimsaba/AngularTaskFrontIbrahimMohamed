import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RatingModule } from 'primeng/rating';
import { MultiSelectModule } from 'primeng/multiselect';
import { ColorPickerModule } from 'primeng/colorpicker';

@Component({
  selector: 'app-prime-comp',
  imports: [
    PasswordModule,
    FormsModule,
    ToggleButtonModule,
    RatingModule,
    MultiSelectModule,
    ColorPickerModule,
  ],
  templateUrl: './prime-comp.html',
  styleUrl: './prime-comp.css',
})
export class PrimeComp {
  value: string = '';
  checked: boolean = false;
  cities = [
    { name: 'Cairo', code: 'Ca' },
    { name: 'Mansoura', code: 'Man' },
    { name: 'Alexanria', code: 'Alex' },
    { name: 'Giza', code: 'Gi' },
  ];
  selectedCities: any[] = [];
  color: string = '';
}
