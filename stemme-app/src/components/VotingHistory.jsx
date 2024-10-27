import rReact from "react";

function VotingHistory({ candidates }) {
  return (
    <div>
      <h2>Stemme Arkiv</h2>
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
