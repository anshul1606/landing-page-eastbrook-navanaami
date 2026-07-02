"use client";

export default function Button({
  children,
  className="",
  type="button"
}) {
  return (

    <button
        type={type}
        className={`px-7 py-4 rounded-full bg-[#C89B3C] text-black font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#E6C77B]
        ${className}
        `}
    >

{children}

</button>

  );
}