type ButtonProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
function Button({ setCount }: ButtonProps) {
  return (
    <button
      onClick={() => {
        setCount((c) => c + 1);
      }}
    >
      Button
    </button>
  );
}

export default Button;
