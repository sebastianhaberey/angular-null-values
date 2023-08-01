import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Kita, KitaService } from './kita.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ReactiveFormsModule],
})
export class AppComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private fooService: KitaService,
  ) {}

  form = this.formBuilder.group({
    // TODO
  });

  ngOnInit(): void {
    this.fooService.get().subscribe((kita) => {
      this.form.patchValue({
        // TODO
      });
    });
  }

  submit() {
    const formValue = this.form.value;

    const kita: Kita = {
      // TODO
    };

    this.fooService.put(kita);
  }
}
