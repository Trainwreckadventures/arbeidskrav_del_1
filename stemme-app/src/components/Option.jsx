import { useState } from "react";
import Button from "./Buttons.jsx";

//kandidatene våre (individet)
//med tilhørende funksjoner + knapper:
function CandidateOption({ candidate, onVote, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(candidate.name);
  //Er vi i visnings eller redigeringsmodus?:
  const toggleEditMode = () => setIsEditing(!isEditing);

  const handleNameChange = (event) => setName(event.target.value);
  //Når IsEditing er falsk så ser du navnet og knappene til kandidaten:
  const saveEdit = () => {
    onEdit(candidate.id, name);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        marginBottom: "10px",
        border: "0.5px solid #ddd",
        borderRadius: "5px",
      }}
    >
      {isEditing ? (
        //om denne er sann så vises en lagringsknapp for å lagre endring
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Skriv inn nytt navn her!"
            style={{ padding: "5px", width: "80%" }}
          />
          <Button
            onClick={saveEdit}
            text="Lagre" //lagrer endringen
          />
        </div>
      ) : (
        <div>
          <p style={{ margin: 0 }}>{candidate.name}</p>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <Button onClick={toggleEditMode} text="Endre navn" />
            <Button
              onClick={() => onVote(candidate.id, "up")}
              text="Stemmer opp" //øker stemmer
            />
            <Button
              onClick={() => onVote(candidate.id, "down")}
              text="Stemmer ned" //reduserer stemmer
            />
            <Button
              onClick={() => onDelete(candidate.id)}
              text="Sletter" //sletter kandidaten
              style={{ backgroundColor: "#6b524e", color: "white" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CandidateOption;
