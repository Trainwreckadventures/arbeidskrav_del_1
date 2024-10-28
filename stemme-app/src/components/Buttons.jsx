//knappefunksjon som lar deg legge til inline styling og andre props:
function Button({ onClick, text, className, ...props }) {
  return (
    <button onClick={onClick} className={className} {...props}>
      {text}
    </button>
  );
}

export default Button;
