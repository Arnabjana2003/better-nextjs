import React from 'react'; // Import the custom CSS for further customizations

const InputRange = ({ value, onChange }) => {
  return (
    <input
      type="range"
      min="50000"
      max="3000000"
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      className="custom-range w-full h-1 bg-slate-500 rounded-lg appearance-none cursor-pointer accent-slate-600"
    />
  );
};

export default InputRange;
