export function classNames(...classes: Array<boolean | string>) {
  return classes.filter(Boolean).join(' ');
}
