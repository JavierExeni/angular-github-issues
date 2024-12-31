import { Component, input } from '@angular/core';
import { GitHubIssue } from '../../interfaces';

@Component({
  selector: 'issue-comment',
  standalone: true,
  imports: [],
  templateUrl: './issue-comment.component.html',
  styles: ``,
})
export class IssueCommentComponent {
  issue = input.required<GitHubIssue>();
}
