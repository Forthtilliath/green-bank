type Props = {
  label: string;
  value: string;
  data?: { label: React.ReactNode; value: string }[];
};

export function PreviewRow({ label, value, data }: Props) {
  return (
    <p>
      <span className="font-semibold">{label}</span> :{" "}
      {data?.find((obj) => obj.value === value)?.label ?? value}
    </p>
  );
}
