"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { HOGData } from "@prisma/client";

export const columns: ColumnDef<HOGData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "zone",
    header: "Zone",
  },
  {
    accessorKey: "date_of_departure",
    header: "Date of Departure",
    cell: ({ row }) => {
      const date: Date = row.getValue("date_of_departure");
      return date.toLocaleDateString("en-GB");
    },
  },
  {
    accessorKey: "date_of_destination",
    header: "Date of Destination",
    cell: ({ row }) => {
      const date: Date = row.getValue("date_of_destination");
      return date.toLocaleDateString("en-GB");
    },
  },
  {
    accessorKey: "train_no",
    header: "Train No",
  },
  {
    accessorKey: "loco_no",
    header: "Loco No",
  },
  {
    accessorKey: "loco_base",
    header: "Loco Base",
    cell: ({ row }) => {
      return (row.getValue("loco_base") as string).toUpperCase();
    },
  },
  {
    accessorKey: "division",
    header: "Division",
    cell: ({ row }) => {
      return (row.getValue("division") as string).toUpperCase();
    },
  },
  {
    accessorKey: "days_per_week",
    header: "Days per week",
  },
  {
    accessorKey: "days_per_month",
    header: "Days per Month",
  },
  {
    accessorKey: "wp_power_car",
    header: "working P.car",
  },
  {
    accessorKey: "nwp_power_car",
    header: "Non Working P.car",
  },
  {
    header: "HOG",
    columns: [
      {
        header: "From",
        accessorKey: "from_hog",
      },
      {
        header: "To",
        accessorKey: "to_hog",
      },
      {
        header: "Unit Consumed",
        accessorKey: "units_hog",
      },
    ],
  },
  {
    header: "EOG",
    columns: [
      {
        header: "From",
        accessorKey: "from_eog",
      },
      {
        header: "To",
        accessorKey: "to_eog",
      },
      {
        header: "Unit Consumed",
        accessorKey: "units_eog",
      },
    ],
  },
  {
    header: "Reason for Run on EOG",
    accessorKey: "reason_eog",
  },
  {
    header: "Diesel Saved",
    accessorKey: "diesel_saved",
  },
];
