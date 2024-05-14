"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

interface Trancations {
  id: number;
  subscriptionType: number;
  amount: string;
  pmntMode: string;
  date: string;
}

export default function SubscriptionTable() {
  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow
          sx={{
            ".MuiTableCell-root": { bgcolor: "#373737", color: "#fff" },
          }}
        >
          <TableCell>Txn ID</TableCell>
          <TableCell>Subscription Type</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Medium</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {transactions?.length > 0 ? (
          transactions?.map((txn, i) => (
            <TableRow key={i}>
              <TableCell>{txn.id.toString().padStart(4, "0")}</TableCell>
              <TableCell>{txn.subscriptionType} Months</TableCell>
              <TableCell>{txn.amount}</TableCell>
              <TableCell>{txn.pmntMode}</TableCell>
              <TableCell>{txn.date}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} sx={{ textAlign: "center" }}>
              No Data Available For Now.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

const transactions: Trancations[] = [
  {
    id: 1,
    subscriptionType: 3,
    amount: "₹ 345",
    pmntMode: "Card",
    date: "10.05.2024",
  },
  {
    id: 2,
    subscriptionType: 6,
    amount: "₹ 654",
    pmntMode: "Card",
    date: "10.05.2024",
  },
  {
    id: 3,
    subscriptionType: 12,
    amount: "₹ 1212",
    pmntMode: "UPI",
    date: "10.05.2024",
  },
  {
    id: 4,
    subscriptionType: 6,
    amount: "₹ 654",
    pmntMode: "UPI",
    date: "10.05.2024",
  },
  {
    id: 5,
    subscriptionType: 3,
    amount: "₹ 345",
    pmntMode: "Card",
    date: "10.05.2024",
  },
  {
    id: 6,
    subscriptionType: 3,
    amount: "₹ 345",
    pmntMode: "Card",
    date: "10.05.2024",
  },
  {
    id: 7,
    subscriptionType: 12,
    amount: "₹ 1212",
    pmntMode: "UPI",
    date: "10.05.2024",
  },
  {
    id: 8,
    subscriptionType: 6,
    amount: "₹ 654",
    pmntMode: "Card",
    date: "10.05.2024",
  },
  {
    id: 9,
    subscriptionType: 6,
    amount: "₹ 654",
    pmntMode: "UPI",
    date: "10.05.2024",
  },
  {
    id: 10,
    subscriptionType: 12,
    amount: "₹ 1212",
    pmntMode: "UPI",
    date: "10.05.2024",
  },
];
