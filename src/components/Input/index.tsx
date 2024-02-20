import React, { useState } from "react";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}
const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ error, type, placeholder, ...props }, ref) => {
    const [isHidden, setIsHidden] = useState(true);
    const inputType = type === "password" ? (isHidden ? type : "text") : type;
    return (
      <div
        className="relative
                    w-full
                    flex
                    flex-col
                    flex-grow"
      >
        <input
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          {...props}
          className={`flex
                    h-13
                    w-full
                    rounded-md
                    border
                    bg-background
                    pt-4
                    pb-4
                    pl-4
                    pr-8
                    text-sm
                    font-semibold
                    placeholder:text-muted-foreground
                    placeholder:text-gray-200
                    focus:outline-none
                    focus:border-black
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    ${error ? "border-red-600" : null}`}
        />
        {type === "password" ? (
          <div onClick={() => setIsHidden(!isHidden)}></div>
        ) : null}
        {error ? (
          <span
            className="text-red-500
                    text-xs
                    mt-2
                    px-1"
          >
            {error}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
