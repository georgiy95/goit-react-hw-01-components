import { TableBody } from './TableBody';
import {
  Transaction,
  TableHead,
  TableItems,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <Transaction>
        <TableHead>
          <tr>
            <th>type</th>
            <th>amount</th>
            <th>currency</th>
          </tr>
        </TableHead>

        <TableItems>
          {items.map(item => (
            <TableRow key={item.id}>
              <TableBody item={item} />
            </TableRow>
          ))}
        </TableItems>
      </Transaction>
    </div>
  );
};
