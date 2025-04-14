/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { orderBy } from 'lodash-es';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectModule } from 'primeng/select';

import { AppService } from '~/services/app.service';

@Component({
  selector: 'app-input-phone',
  imports: [SelectModule, InputMaskModule, FormsModule],
  templateUrl: './input-phone.component.html',
  styleUrl: './input-phone.component.scss'
})
export class InputPhone implements OnInit {
  // TODO: Fix type any (Eslint)
  placeholder = input('');

  constructor(private appService: AppService) {}
  countries: any[] = [];
  selectedCountry: any;

  ngOnInit(): void {
    this.getCountryList();
  }

  getCountryList() {
    this.appService.getListCountries().subscribe((res: any) => {
      const countryList = res.map((country: any) => ({
        name: country.name.common,
        dialCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
        flag: country.flags.png,
        code: country.cca2
      }));
      this.countries = orderBy(countryList, (country) => parseInt(country.dialCode.replace('+', ''), 10), 'asc');

      if (this.countries.length) {
        this.selectedCountry = this.countries[0];
      }
    });
  }
}
