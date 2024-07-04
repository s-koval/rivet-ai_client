import { FC } from 'react';

import { Client } from '@/dtos/Client';

interface Props {
  data: Client;
}

const TableRow: FC<Props> = ({ data }) => (
  <tr className="text-gray-700 dark:text-gray-400">
    <td className="px-4 py-3 text-sm">{data.firstName}</td>
    <td className="px-4 py-3 text-sm">{data.lastName}</td>
    <td className="px-4 py-3 text-xs">
      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
        {data.email}
      </span>
    </td>
  </tr>
);

export default TableRow;
