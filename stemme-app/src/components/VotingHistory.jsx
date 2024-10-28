//Stemmehistorikken for kandidatene våre
//kan med fordel styles litt penere om det blir tid:
function VotingHistory({ candidates }) {
  return (
    <div>
      <h2>Stemmehistorikk:</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            {candidate.name} : {candidate.upvotes} Upvotes,{" "}
            {candidate.downvotes} Downvotes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VotingHistory;
