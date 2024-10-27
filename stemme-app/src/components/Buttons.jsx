//nice to have these if you want to alter the style, if there is time for that later...

function Button({ onClick, text, className, ...props }) {
  return (
    <button onClick={onClick} className={className} {...props}>
      {text}
    </button>
  );
}
