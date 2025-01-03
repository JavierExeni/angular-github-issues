import { sleep } from "@helpers/sleep";
import { environment } from "src/environments/environment.development";
import { GitHubIssue } from "../interfaces";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getIssueComments = async (issueNumber: string): Promise<GitHubIssue[]> => {
  await sleep(1500);
  try {
    const resp = await fetch(`${BASE_URL}/issues/${ issueNumber }/comments`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw "Can't load comments";

    const comments: GitHubIssue[] = await resp.json();

    return comments;
  } catch (error) {
    throw "Can't load comments";
  }
};
