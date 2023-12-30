import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BiLastPage, BiFirstPage } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Select from "react-select";

export default function DataTable({ data, columns }) {
  const [sorting, setSorting] = useState([]);
  const [filterData, setFilterData] = useState("");
  const [filterGuestOf, setFilterGuestOf] = useState("");
  const [invitationStatus, setInvitationStatus] = useState("");

  const guestOf = [
    { value: "", label: "All" },
    { value: "Aditia Prasetian", label: "Aditia Prasetian" },
    { value: "Masning Maunah", label: "Masning Maunah" },
  ];

  const invStatus = [
    { value: "", label: "All" },
    { value: "Belum Terkirim", label: "Belum Terkirim" },
    { value: "Sent", label: "Sent" },
  ];

  const customStyle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      "&:hover": { borderColor: "#10b981" },
      borderColor: state.isFocused ? "#10b981" : "",
      outlineColor: "#10b981",
      boxShadow: state.isFocused ? "0 0 0 1.5px #10b981" : "#10b981",
    }),
  };

  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#6ee7b7",
      primary: "#10b981",
    },
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      globalFilter: filterData || filterGuestOf || invitationStatus,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange:
      setFilterData || setFilterGuestOf || setInvitationStatus,
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <input
          type="text"
          name="filter"
          id="filter"
          className="w-60 rounded-md border p-1.5 transition hover:border-emerald-500 focus-visible:outline-green-600"
          placeholder="Search by Guest Name..."
          value={table.getColumn("name")?.getFilterValue() || ""}
          onChange={(e) =>
            table.getColumn("name")?.setFilterValue(e.target.value)
          }
        />
        <div className="relative flex w-40 flex-col">
          <label htmlFor="filterByName" className="absolute -top-5 text-xs">
            Filter by Guest of
          </label>
          <Select
            options={guestOf}
            onChange={(e) =>
              table.getColumn("guestOf")?.setFilterValue(e.value)
            }
            styles={customStyle}
            theme={customTheme}
          />
        </div>
        <div className="relative flex w-40 flex-col">
          <label htmlFor="filterByName" className="absolute -top-5 text-xs">
            Filter by Invitation Status
          </label>
          <Select
            options={invStatus}
            onChange={(e) =>
              table.getColumn("invitationStatus")?.setFilterValue(e.value)
            }
            styles={customStyle}
            theme={customTheme}
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex gap-2">
        <Button
          size="icon"
          className="text-2xl"
          variant="outline"
          onClick={() => table.setPageIndex(0)}
        >
          <BiFirstPage />
        </Button>
        <Button
          size="icon"
          className="text-sm"
          variant="outline"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Prev
        </Button>
        <Button
          size="icon"
          className="text-sm"
          variant="outline"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
        <Button
          size="icon"
          className="text-2xl"
          variant="outline"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <BiLastPage />
        </Button>
      </div>
    </div>
  );
}
