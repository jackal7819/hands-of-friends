import React from 'react';

const InputField = ({ label, id, name, type, value, error, onChange, onBlur }) => {
  const InputElement = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className={`relative w-[28.4rem] mt-6 ${type === 'textarea' ? 'mb-6' : ''}`}>
      <label className="text-lg" htmlFor={id}>
        {label}
      </label>
      <InputElement
        className={`w-full h-10 rounded-[0.3rem] mt-2 px-2 outline-none focus:ring-1 focus:ring-transparent border  
          ${type === 'textarea' ? 'h-[135px] p-1' : 'h-[45px]'}
          ${error ? "border-[red] " : value ? "border-deepBlue" : "border-fontGray focus:border-vividBlue"}
        `}
        type={type !== 'textarea' ? type : undefined}
        autoComplete="off"
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        rows={type === 'textarea' ? '4' : undefined}
      />
      {error && (
        <div className={`absolute top-[100%] text-[red] transition duration-300 ${error ? "" : "opacity-0 translate-y-[-0.625rem]"} `}>
          {error}
        </div>
      )}
    </div>
  );
};

export default InputField;