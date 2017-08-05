import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

const row = (x, i, header) =>
  <TableRow key={`tr-${i}`}>
    {header.map((y, k) =>
      <TableRowColumn key={`trc-${k}`}>
        {x[y.prop]}
      </TableRowColumn>
    )}
  </TableRow>;

export default ({ data, header }) =>
  <Table>
    <TableHeader>
      <TableRow>
        {header.map((x, i) =>
          <TableHeaderColumn key={`thc-${i}`}>
            {x.name}
          </TableHeaderColumn>
        )}
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((x, i) => row(x, i, header))}
    </TableBody>
  </Table>;
