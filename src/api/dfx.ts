const BASE_ENDPOINT = "https://api.dfx.swiss/v1";

export async function getVotingData(votingRound = 'latest') {
  const response = await fetch(`${BASE_ENDPOINT}/statistic/cfp/${votingRound}`);
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(`An error occurred fetching data: ${response}`);
  }
}