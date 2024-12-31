import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GitHubIssue, State } from '../../interfaces';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'issue-item',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './issue-item.component.html',
  styles: ``,
})
export class IssueItemComponent {
  issue = input.required<GitHubIssue>();

  // get since () {}
  get isOpen() {
    return this.issue().state === State.Open;
  }
}
