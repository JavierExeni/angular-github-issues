import { environment } from 'src/environments/environment.development';
import { getIssueComments } from './get-issue-comments.action';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

const issueNumber = '123';
const mockComments = [
  {
    id: 1,
    body: 'first comment',
    user: {login: 'user1'}
  },
  {
    id: 2,
    body: 'second comment',
    user: {login: 'user2'}
  },
];

describe('GetIssueByNumber Action', () => {
  it('should fetch comments issue succesfully', async () => {
    const requestUrl = `${BASE_URL}/issues/${issueNumber}/comments`;
    const issueCommentsResponse = new Response(JSON.stringify(mockComments), {
      status: 200,
      statusText: 'OK',
    });

    spyOn(window, 'fetch').and.resolveTo(issueCommentsResponse);

    const issue = await getIssueComments(issueNumber);

    expect(window.fetch).toHaveBeenCalledWith(requestUrl, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
  });

  it('should throw an error if the repsonse is not ok', async () => {
    const issueCommentsResponse = new Response(null, {
      status: 404,
      statusText: 'Not found',
    });

    spyOn(window, 'fetch').and.resolveTo(issueCommentsResponse);
    try {
      const issue = await getIssueComments(issueNumber);
      expect(true).toBeFalse();
    } catch (error) {
      expect(error).toBe(`Can't load comment`);
    }
  });
});
