import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id: number, date: string, name: string, Level: string) {
  return { id, date, name, Level };
}

const rows = [
  createData(0, "16 Mar, 2019", "Elvis Presley", "Tupelo"),
  createData(1, "16 Mar, 2019", "Paul McCartney", "London"),
  createData(2, "16 Mar, 2019", "Tom Scholz", "Boston, MA"),
  createData(3, "16 Mar, 2019", "Michael Jackson", "Gary, IN"),
  createData(4, "15 Mar, 2019", "Bruce Springsteen", "Long Branch, NJ"),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.Level}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Users
      </Link>
    </React.Fragment>
  );
}
