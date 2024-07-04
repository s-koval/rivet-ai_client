import { FC } from 'react';

import ClientForm from '@/components/form/ClientForm';

const Navbar: FC = () => (
  <aside className="z-20 border-r-2 border-grey-900 flex-shrink-0 w-3/12 overflow-y-auto bg-white dark:bg-gray-800 md:block">
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <div className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
        RivetAI
      </div>

      <ClientForm />
    </div>
  </aside>
);

export default Navbar;
