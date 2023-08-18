import { TableCell } from './TableBody.styles';

export const TableBody = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </>
  );
};
