import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Foo, FooService } from './foo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private fooService: FooService,
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

    const foo: Foo = {
      // TODO
    };

    this.fooService.put(foo);
  }
}
