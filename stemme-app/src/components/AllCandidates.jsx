import React from "react";
import CandidateOption from "../components/Option.jsx";

//Viser alle kandidater på listen vår
//candidates er arrayet de lagres i
function AllCandidates({ candidates, onVote, onDelete, onEdit }) {
  return (
    <div>
      {candidates.map((candidate) => (
        <CandidateOption
          key={candidate.id}
          candidate={candidate}
          onVote={onVote}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default AllCandidates;
