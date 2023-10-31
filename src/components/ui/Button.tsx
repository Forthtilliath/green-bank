export type ButtonProps = {
  name: string;
  label: React.ReactNode;
  desc?: React.ReactNode;
  value?: string;
  checked?: boolean;
};

export function Button({
  label,
  name,
  desc,
  value,
  checked = false,
}: ButtonProps) {
  return (
    <label className="relative flex flex-col bg-white p-5 rounded-lg shadow-md cursor-pointer">
      <span className="font-semibold text-gray-700 leading-tight uppercase">
        {label}
      </span>
      {desc && (
        <span className="font-semibold text-gray-500 leading-tight mt-3 text-xs">
          {desc}
        </span>
      )}
      <input
        type="radio"
        name={name}
        value={value}
        className="absolute h-0 w-0 appearance-none"
        defaultChecked={checked}
      />
      <span
        aria-hidden="true"
        className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
      >
        <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-green-600"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </span>
    </label>
  );
}
