import React from "react";
import CandidateOption from "../components/Option.jsx";

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
