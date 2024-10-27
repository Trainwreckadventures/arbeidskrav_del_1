import React, { useState } from "react";
import AllCandidates from "./components/AllCandidates.jsx";
import VotingHistory from "./components/VotingHistory.jsx";

//should the search bar in the app part or should that go somwhere else...

function App() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Knut Potetmos", upvotes: 0, downvotes: 0 },
    { id: 2, name: "Mona Eplesaus", upvotes: 0, downvotes: 0 },
    { id: 3, name: "Katrine Kefir", upvotes: 0, downvotes: 0 },
    { id: 4, name: "Alf Ananas", upvotes: 0, downvotes: 0 },
  ]);
  const [newCandidateName, setNewCandidateName] = useState("");

  const addCandidate = () => {
    if (newCandidateName.trim()) {
      const newCandidate = {
        id: Date.now(),
        name: newCandidateName,
        upvotes: 0,
        downvotes: 0,
      };
      setCandidates([...candidates, newCandidate]);
      setNewCandidateName("");
    }
  };

  const handleNameChange = (event) => {
    setNewCandidateName(event.target.value);
  };

  const handleDelete = (id) => {
    setCandidates((prevCandidates) =>
      prevCandidates.filter((candidate) => candidate.id !== id)
    );
  };

  const handleEdit = (id, newName) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === id ? { ...candidate, name: newName } : candidate
      )
    );
  };

  return (
    <div>
      <h1>Stemme-App</h1>
      <input
        type="text"
        value={newCandidateName}
        onChange={handleNameChange}
        placeholder="Legg til kandidat"
      />
      <button onClick={addCandidate}>Legg til ny kandidat</button>

      <AllCandidates
        candidates={candidates}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      <VotingHistory candidates={candidates} />
    </div>
  );
}

export default App;
