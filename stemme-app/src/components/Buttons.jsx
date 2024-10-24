//is it a good idea to separate the buttons or am I just creating more work?
//need to actually have the functions to...
function UpVote() {
  const upVote = () => {
    alert("du har stemt opp på denne kandidaten");
  };
  return <button onClick={upVote}>Stem Opp</button>;
}

function DownVote() {
  const downVote = () => {
    alert("du har stemt ned på denne kandidaten");
  };
  return <button onClick={downVote}>Stem ned</button>;
}

function AddButton() {
  const addButton = () => {
    alert("du har lagt til kandidat");
  };
  return <button onClick={addButton}>Legg til</button>;
}

function DeleteButton() {
  const deleteButton = () => {
    alert("du har slettet kandidaten");
  };
  return <button onClick={deleteButton}>Slett</button>;
}

function EditButton() {
  const editButton = () => {
    alert("du har endret navn på kandidaten");
  };
  return <button onClick={editButton}>Endre navn</button>;
}

export { UpVote, DownVote, AddButton, DeleteButton, EditButton };
