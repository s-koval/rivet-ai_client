import { FC } from 'react';

import TableRow from '@/components/table/TableRow';

import { ClientList } from '@/dtos/ClientList';

interface Props {
  clientList: ClientList;
}

const Table: FC<Props> = ({ clientList }) => (
  <div className="w-full h-screen overflow-x-auto overflow-y-auto">
    <table className="w-full whitespace-no-wrap">
      <thead>
        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
          <th className="px-4 py-3">First Name</th>
          <th className="px-4 py-3">Last Name</th>
          <th className="px-4 py-3">Email</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
        {clientList.data.map((item, index) => (
          <TableRow key={index} data={item} />
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
