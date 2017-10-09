import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    {{ text | summary }}
    `
})

export class CoursesComponent {
  viewMode = 'somethingElse';
}
