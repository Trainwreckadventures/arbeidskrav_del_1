import { useState } from "react";
import Button from "./Buttons.jsx";

function CandidateOption({ candidate, onVote, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(candidate.name);

  const toggleEditMode = () => setIsEditing(!isEditing);

  const handleNameChange = (event) => setName(event.target.value);

  const saveEdit = () => {
    onEdit(candidate.id, name);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Skriv inn nytt navn her!"
          />
          <Button onClick={saveEdit} text="Lagre" />
        </div>
      ) : (
        <div>
          <p>{candidate.name}</p>
          <Button onClick={toggleEditMode} text="Endre navn" />
        </div>
      )}
      <Button onClick={() => onVote(candidate.id, "up")} text="Stemmer opp" />
      <Button onClick={() => onVote(candidate.id, "down")} text="Stemmer ned" />

      <Button onClick={() => onDelete(candidate.id)} text="Sletter" />
    </div>
  );
}

export default CandidateOption;
