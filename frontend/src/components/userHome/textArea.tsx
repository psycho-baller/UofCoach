export default function TextArea({
  description,
  setDescription,
}: {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}): React.ReactElement<{
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}> {
  return (
    <div className="">
      <label
        htmlFor="comment"
        className="block text-sm font-medium text-gray-700"
      >
        Describe the problems you are facing and the help that you are looking
        for
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name="description"
          id="description"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={''}
        />
      </div>
    </div>
  );
}
