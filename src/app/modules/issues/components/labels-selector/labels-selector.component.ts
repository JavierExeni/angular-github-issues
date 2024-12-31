import { Component, input } from '@angular/core';
import { GithubLabel } from '../../interfaces';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'issues-labels-selector',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './labels-selector.component.html',
  styles: ``,
})
export class LabelsSelectorComponent {
  labels = input.required<GithubLabel[]>();
}
