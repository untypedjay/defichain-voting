const BASE_ENDPOINT = "https://api.github.com";

export async function getIssueData(issueNumber: number) {
  const response = await fetch(`${BASE_ENDPOINT}/repos/DeFiCh/dfips/issues/${issueNumber}`);
  if (response.status === 200) {
    return response.json();
  } else {
    console.error(`Received the following status code: ${response.status}`);
    return null;
  }
}