interface ButtonProps {
  region?: string;
  onClick: () => void;
  isActive: boolean;
}

const Button: React.FC<ButtonProps> = ({ region, onClick, isActive }) => {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <button
      type="button"
      className={`col btn-green  ${isActive ? "btn-green-active" : ""}`}
      data-mdb-ripple-color="dark"
      onClick={handleButtonClick}
    >
      {region}
    </button>
  );
};

export default Button;
