import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TokenHolder {
  address: string;
  tokens: number;
  percentage: number;
}

export function TokenHoldersTable({ holders }: { holders: TokenHolder[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-50">
          <TableHead>Holder Address</TableHead>
          <TableHead className="text-right">Tokens</TableHead>
          <TableHead className="text-right">Percentage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {holders.map((holder, index) => (
          <TableRow key={index} className="hover:bg-gray-50">
            <TableCell className="font-mono text-xs">
              {holder.address}
            </TableCell>
            <TableCell className="text-right">
              {holder.tokens.toLocaleString()}
            </TableCell>
            <TableCell className="text-right">
              {(holder.percentage * 100).toFixed(2)}%
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
