const BASE_ENDPOINT = "https://api.github.com";

export async function getIssueData(issueNumber: number) {
  const response = await fetch(`${BASE_ENDPOINT}/repos/DeFiCh/dfips/issues/${issueNumber}`);
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`An error occurred fetching data: ${response}`);
  }
}