"use client";
import React from "react";
import DataTable from "./data-table";
import useSWR, { useSWRConfig } from "swr";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loader, Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Tables() {
  const { mutate } = useSWRConfig();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [guestOf, setGuestOf] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const { data, error, isLoading } = useSWR("/api/guests", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center gap-3 p-5">
        <Loader className="h-5 w-5 animate-spin" /> Loading...
      </div>
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: name,
      type: type,
      guestOf: guestOf,
      relationship: relationship,
      phone: phone,
      address: address,
    };
    const res = axios({
      method: "POST",
      url: "/api/guests",
      data: body,
    }).then((res) => res.data);
    console.log(await res);
    const data = await res;
    console.log(data.isListed);
    if (data.isListed === false) {
      setAddress("");
      setName("");
      setType("");
      setGuestOf("");
      setRelationship("");
      setPhone("");
      toast.success("Successfully added to Guests List");
      mutate("/api/guests");
    } else {
      toast.error("Already in Guest List");
    }
  };

  const listAning = [
    "Keluarga Abi Mulyono",
    "Keluarga Mamah Nining",
    "Karyawan Rumah",
    "Karyawan Sekolah",
    "Teman SMA",
    "Teman Kuliah",
  ];
  const listAdit = ["adit"];

  /** @type import("@tanstack/react-table").ColumnDef<any> */

  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        const data = row.original;
        const name = data.name;
        return <p className="w-full text-sm">{name}</p>;
      },
    },
    {
      accessorKey: "url",
      header: "URL",
      cell: (info) => {
        return (
          <a
            href={info.getValue()}
            target="_blank"
            className="truncate hover:text-blue-600 hover:underline"
          >
            {info.getValue()}
          </a>
        );
      },
    },
    {
      accessorKey: "guestId",
      header: "Guest ID",
    },
    {
      accessorKey: "guestOf",
      header: "Guest of",
    },
    // {
    //   accessorKey: "type",
    //   header: "Type",
    // },
    // {
    //   accessorKey: "relationship",
    //   header: "Relationship",
    // },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    // {
    //   accessorKey: "address",
    //   header: "Address",
    // },
    // {
    //   accessorKey: "invitationStatus",
    //   header: "Invitation Status",
    // },

    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const getRow = row.original;
        const phoneNumber = getRow.phone;
        const guest = getRow.name;
        const invitationLink = getRow.url;
        const message = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=*Wedding%20Invitation%20of%20Adit%20%26%20Aning*%0A%0ABismillahirrahmanirrahim%0AAssalamu%27alaikum%20Warahmatullahi%20Wabarakatuh%0A%0AYth.%20${guest}%2C%0A%0ADengan%20mengharap%20ridha%20dan%20rahmat%20Allah%20SWT%2C%20serta%20tanpa%20mengurangi%20rasa%20hormat.%20Perkenankan%20kami%20mengundang%20Bpk%2FIbu%2FSdr%2Fi%20untuk%20hadir%20di%20acara%20pernikahan%20kami%20pada%3A%0A%0ANama%3A%20Masning%20Maunah%2C%20S.P.%20%26%20Aditia%20Prasetian%2C%20S.T.%0AHari%2FTgl%3A%20Sabtu%2C%2020%20Januari%202024%0APukul%3A%2009.00%20-%2015.00%0ALokasi%3A%20Perum%20Kodam%20Jaya%20Blok%20A%2C%20No.%2019%0A%0AMerupakan%20suatu%20kehormatan%20bagi%20kami%20apabila%20Bpk%2FIbu%2FSdr%2Fi%20dapat%20menghadiri%2F%20menyaksikan%20prosesi%20pernikahan%20kami%20pada%20tautan%20dibawah%20ini%3A%0A%0A${invitationLink}%0A%0AKami%20juga%20mengharapkan%20ucapan%2C%20harapan%2C%20serta%20doa%20Bpk%2FIbu%2FSdr%2Fi%20untuk%20kami.%0A%0AAtas%20perhatiannya%20kami%20ucapkan%20terimakasih.`;
        return (
          <a
            href={`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`}
            target="_blank"
            className="flex w-fit items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-500"
          >
            Send <Send className="h-4 w-4" />
          </a>
        );
      },
    },
  ];

  return (
    <section className="flex flex-col gap-5 px-10 py-5 dark:bg-zinc-800">
      <div className="flex items-center gap-5">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-fit bg-emerald-600 hover:bg-emerald-700">
              Add Guest
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Add New Guest to the List</AlertDialogTitle>
              <AlertDialogDescription>
                This action will add new guest to your list of guests.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full rounded-md border p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* <select
                name="types"
                id="types"
                className="w-full rounded-md border p-2"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Adult">Adult</option>
                <option value="Child">Child</option>
              </select> */}
              <select
                name="guestOf"
                id="guestOf"
                className="w-full rounded-md border p-2"
                value={guestOf}
                onChange={(e) => setGuestOf(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Masning Maunah">Masning Maunah</option>
                <option value="Aditia Prasetian">Aditia Prasetian</option>
              </select>
              {/* <select
                name="relationship"
                id="relationship"
                className="w-full rounded-md border p-2"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Keluarga Abah Cece">Keluarga Abah Cece</option>
                <option value="Keluarga Mamah Kokom">
                  Keluarga Mamah Kokom
                </option>
                <option value="Keluarga Abi Mulyono">
                  Keluarga Abi Mulyono
                </option>
                <option value="Keluarga Mamah Nining">
                  Keluarga Mamah Nining
                </option>
                <option value="Karyawan Sekolah">Karyawan Sekolah</option>
                <option value="Karyawan Rumah">Karyawan Rumah</option>
                <option value="Karyawan Abi">Karyawan Abi</option>
                <option value="Teman">Teman</option>
              </select> */}
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                className="w-full rounded-md border p-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {/* <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                className="w-full rounded-md border p-2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              /> */}

              <AlertDialogFooter className={"mt-5 flex justify-end gap-3"}>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button type="submit">Add Guest</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <DataTable data={data} columns={columns} />
    </section>
  );
}
