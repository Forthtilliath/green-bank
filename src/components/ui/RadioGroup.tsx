import { Button, ButtonProps } from "./Button";

type Props = {
  title: string;
  name: string;
  options: Omit<ButtonProps, "name">[];
  errors: string[];
  defaultValue: string | null;
};

export function RadioGroup({
  title,
  name,
  options,
  errors,
  defaultValue,
}: Props) {
  return (
    <fieldset className="space-y-6">
      <div className="flex items-center justify-between py-4 border-b border-gray-300">
        <legend className="text-2xl text-gray-700 mr-4">{title}</legend>
      </div>
      <div className="grid sm:grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-6">
        {options.map((buttonProps) => (
          <Button
            key={buttonProps.value}
            name={name}
            {...buttonProps}
            checked={defaultValue === buttonProps.value}
          />
        ))}
      </div>
      {errors && errors.length > 0 && (
        <p className="mt-2 text-sm text-red-500">{errors.join(" ")}</p>
      )}
    </fieldset>
  );
}
