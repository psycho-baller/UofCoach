export default function Input({
  name,
  placeholder,
  ...props
}: {
  name: string;
  placeholder: string;
  [key: string]: any;
}) {
  return (
    <div {...props}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 capitalize"
      >
        {name}
      </label>
      <div className="mt-1">
        <input
          placeholder={placeholder}
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
