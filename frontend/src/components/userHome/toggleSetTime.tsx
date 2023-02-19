import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { classNames } from 'src/utils';

export default function Example({
  enabled,
  setEnabled,
  ...props
}: {
  enabled: boolean;
  setEnabled: () => void;
  [key: string]: any;
}) {
  return (
    <Switch.Group as="div" {...props}>
      <span className="flex flex-grow flex-col">
        <Switch.Label
          as="span"
          className="text-sm font-medium text-gray-900"
          passive
        >
          I need help Now
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-500">
          If not, you can schedule a date and time for a tutor to help you
        </Switch.Description>
      </span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-red-600' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
    </Switch.Group>
  );
}
