//is this  good idea or am I just trashing around here....
//grow bigger brain asap!
import { useState } from "react";
import {
  UpVote,
  DownVote,
  AddButton,
  DeleteButton,
  EditButton,
} from "./Buttons.jsx";

function CandidateOption() {
  const [name, setName] = useState("Knut Potetmos");
  const [isEditing, setIsEditing] = useState(false);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={name} onChange={handleNameChange} />
          <button onClick={toggleEditMode}>Lagre</button>
        </div>
      ) : (
        <div>
          <p>Navn: {name}</p>
          <button onClick={toggleEditMode}>Endre navn</button>
        </div>
      )}

      <UpVote />
      <DownVote />
      <DeleteButton />
      <AddButton />
      <EditButton />
    </div>
  );
}

export default CandidateOption;
