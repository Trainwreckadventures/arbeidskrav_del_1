import React, { useState } from "react";
import AllCandidates from "./components/AllCandidates.jsx";
import VotingHistory from "./components/VotingHistory.jsx";

function App() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Knut Potetmos", upvotes: 0, downvotes: 0 },
    { id: 2, name: "Mona Eplesaus", upvotes: 0, downvotes: 0 },
    { id: 3, name: "Katrine Kefir", upvotes: 0, downvotes: 0 },
    { id: 4, name: "Alf Ananas", upvotes: 0, downvotes: 0 },
  ]);
  const [newCandidateName, setNewCandidateName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  //Her legger vi til kandidater:
  const addCandidate = () => {
    if (newCandidateName.trim()) {
      const newCandidate = {
        id: Date.now(), //tidsstempel for id
        name: newCandidateName,
        upvotes: 0,
        downvotes: 0,
      };
      setCandidates([...candidates, newCandidate]);
      setNewCandidateName("");
    }
  };
  //navnendring på kandidat:
  const handleNameChange = (event) => {
    setNewCandidateName(event.target.value);
  };
  //søke etter kandidat:
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  //redigering av navn på kandidat:
  const handleEdit = (id, newName) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === id ? { ...candidate, name: newName } : candidate
      )
    );
  };
  //sletting av kandidat:
  const handleDelete = (id) => {
    setCandidates((prevCandidates) =>
      prevCandidates.filter((candidate) => candidate.id !== id)
    );
  };
  //håndtering av opp- og nedstemmer:
  const handleVote = (id, type) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === id
          ? {
              ...candidate,
              upvotes:
                type === "up" ? candidate.upvotes + 1 : candidate.upvotes,
              downvotes:
                type === "down" ? candidate.downvotes + 1 : candidate.downvotes,
            }
          : candidate
      )
    );
  };
  //Her filtrerer vi kandidater:
  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    //Stylingen til søkerfeltet:
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>StemmeApp</h1>
      <div style={{ margin: "10px 0", padding: "8px", marginLeft: "-10px" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Søk etter kandidat her"
          style={{ margin: "10px 0", padding: "8px", width: "100%" }}
        />
      </div>
      {/* Styling til feltet hvor du kan endre kandidat: */}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          type="text"
          value={newCandidateName}
          onChange={handleNameChange}
          placeholder="Legg til kandidat"
          style={{ flex: 1, padding: "8px", marginRight: "10px" }}
        />
        <button onClick={addCandidate}>Legg til ny kandidat</button>
      </div>

      <AllCandidates
        candidates={filteredCandidates}
        onVote={handleVote}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <VotingHistory candidates={candidates} />
    </div>
  );
}

export default App;
