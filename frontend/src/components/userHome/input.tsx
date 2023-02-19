export default function Input({
  name,
  ...props
}: {
  name: string;
  [key: string]: any;
}) {
  return (
    <div {...props}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {name}
      </label>
      <div className="mt-1">
        <input
          type="text"
          name={name}
          id={name}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={''}
        />
      </div>
    </div>
  );
}
