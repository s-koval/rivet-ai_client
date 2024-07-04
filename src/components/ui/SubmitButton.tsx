import { FC } from 'react';

import LoadingIcon from '@/icons/LoadingIcon';

interface Props {
  title: string;
  isLoading: boolean;
}

const SubmitButton: FC<Props> = ({ title, isLoading }) => (
  <button
    type="submit"
    className="flex items-center justify-between w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
  >
    {title}
    {isLoading ? (
      <div role="status">
        <LoadingIcon />
      </div>
    ) : (
      <span className="ml-2" aria-hidden="true">
        +
      </span>
    )}
  </button>
);

export default SubmitButton;
