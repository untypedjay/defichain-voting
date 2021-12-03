const BASE_ENDPOINT = "https://api.dfx.swiss/v1";

export async function getVotingData(votingRound = 'latest') {
  console.log(votingRound)
  const response = await fetch(`${BASE_ENDPOINT}/statistic/cfp/${votingRound}`);
  if (response.status === 200) {
    return response.json();
  } else {
    console.error(`Received the following status code: ${response.status}`);
    return [];
  }
}