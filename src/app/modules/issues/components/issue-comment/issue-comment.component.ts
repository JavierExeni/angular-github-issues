import { Component, input } from '@angular/core';
import { GitHubIssue } from '../../interfaces';
import { MarkdownModule } from 'ngx-markdown';

@Component({
    selector: 'issue-comment',
    imports: [MarkdownModule],
    templateUrl: './issue-comment.component.html',
    styles: ``
})
export class IssueCommentComponent {
  issue = input.required<GitHubIssue>();
}
