"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="p-2 text-xl bg-blue-800 text-white rounded-md"
      onClick={() => console.log("test")}
    >
      {children}
    </button>
  );
};

export default Button;
