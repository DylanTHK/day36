import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  countryList: string[] = [];

  form!: FormGroup

  constructor(
    private fb: FormBuilder, 
    private weatherSvc: WeatherService) { };

  ngOnInit(): void {
      this.form = this.fb.group({
        city: this.fb.control('singapore', Validators.required)
      })
  }

  addCity() {
    const city = this.form.get("city")?.value;
    console.info("city name: ", city);
    this.countryList.push(city);

    this.form = this.fb.group({
      city: this.fb.control('', Validators.required)
    })
  }

  // method to call service, pass city
  getWeather(idx: number) {
    const selectedCity = this.countryList[idx];
    console.info("Selected Contry: ", selectedCity);
  }

}
