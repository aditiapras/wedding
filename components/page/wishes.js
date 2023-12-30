"use client";
import TextareaAutosize from "react-textarea-autosize";
import useSWR from "swr";
import AnimeText from "../animated/text-animated";
import { useState } from "react";
import { editMessage, sendMessage } from "@/lib/clientFetch";
import moment from "moment-timezone";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";
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
import { Pencil } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
});

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Wishes({ font, person, id }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [range, setRange] = useState("");
  const [awaitMessage, setAwaitMessage] = useState(true);
  const [loadMore, setLoadMore] = useState(0);
  const [awaitLoad, setAwaitLoad] = useState(false);
  const [totalLoaded, setTotalLoaded] = useState(4);

  const { data, isLoading, error, mutate } = useSWR(`/api/messages`, fetcher, {
    revalidateOnFocus: false,
  });
  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <p className={`${font.className} font-light text-wedding-100`}>
        loading...
      </p>
    );
  if (data) {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 500,
    });
  }

  const count = data.length;

  const filteredData =
    count <= 4
      ? data
      : data.filter(
          (item) =>
            item.rowId >= count + loadMore - 1 && item.rowId <= count + 2,
        );

  const handleLoadMore = () => {
    setAwaitLoad(true);
    setTimeout(() => {
      setLoadMore(loadMore - 4);
      setTotalLoaded(totalLoaded + 4);
      console.log(totalLoaded);
      setAwaitLoad(false);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const checkExist = data.filter((item) => item.guestId === id);
      const guestId = checkExist[0].guestId;
      if (guestId == id) {
        toast.error("You have already sent wishes");
        setMessage("");
      }
    } catch (error) {
      const data = {
        name: person,
        message: message,
      };

      setLoading(true);
      setTimeout(async () => {
        await sendMessage(data);
        setMessage("");
        await mutate();
        setLoading(false);
      }, 2000);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const body = {
      range: range,
      message: newMessage,
    };
    setAwaitMessage(false);
    setTimeout(async () => {
      await editMessage(body);
      setMessage("");
      toast.success("Message successfully edited");
      await mutate();
      setAwaitMessage(true);
    }, 2000);
  };

  return (
    <>
      <p
        className="font-garet text-3xl text-wedding-100"
        data-aos="fade"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        Wedding Wishes
      </p>

      <form
        className="flex w-full flex-col items-center gap-5"
        onSubmit={handleSubmit}
      >
        <p
          className="font-garet text-base text-wedding-100"
          data-aos="fade"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          {`Dear  ${person == null ? "" : person}, please write your wishes`}
        </p>

        <TextareaAutosize
          required
          className={`w-full rounded-md bg-wedding-900 p-2 text-wedding-100 ${font.className} font-light focus-visible:outline-none`}
          placeholder={`Your wishes`}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          disabled={loading || id == null}
          className={`flex items-center gap-2 rounded-full bg-wedding-100 px-4 py-2 text-white disabled:cursor-not-allowed ${font.className} font-light transition duration-200  hover:bg-wedding-100 disabled:bg-wedding-100/50`}
        >
          {loading && (
            <AiOutlineLoading3Quarters className="animate-spin"></AiOutlineLoading3Quarters>
          )}
          Send Wishes
        </button>
      </form>
      <div
        className={`${font.className} flex w-full flex-col flex-col-reverse gap-5 font-light `}
      >
        {filteredData && filteredData.length >= 1 && (
          <>
            {filteredData.map((message) => (
              <div
                key={message.guestId}
                className="flex flex-col  gap-2 border-b border-wedding-100 pb-2"
              >
                <div className={`flex justify-between`}>
                  <p
                    className={`${onest.className} text-sm font-medium text-wedding-100`}
                    data-aos="fade"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {message.name}
                  </p>
                  {message.guestId == id && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button
                          type="button"
                          className="flex items-center gap-1 text-sm text-wedding-100 hover:underline hover:decoration-wedding-100 hover:underline-offset-2"
                        >
                          <Pencil className="h-3 w-3 text-wedding-100" />
                          Edit
                        </button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-wedding-800 sm:max-w-[425px]">
                        <form className="grid gap-4 py-4" onSubmit={handleEdit}>
                          <AlertDialogHeader>
                            <AlertDialogTitle
                              className={`text-lg ${font.className} text-wedding-100`}
                            >
                              Edit Message
                            </AlertDialogTitle>
                            <AlertDialogDescription
                              className={` ${font.className} flex flex-col gap-3 text-wedding-100`}
                            >
                              Make changes to your message here. Click save when
                              you{"'"}re done.
                              <TextareaAutosize
                                required
                                className={`col-span-4 w-full rounded-md bg-wedding-900 p-2 text-wedding-100 ${font.className} font-light focus-visible:outline-wedding-100`}
                                placeholder={`Your wishes`}
                                onChange={(e) => {
                                  setNewMessage(e.target.value);
                                  setRange(message.editRange);
                                }}
                                value={newMessage || message.message}
                              />
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter
                            className={`flex w-full flex-row items-center justify-end gap-2`}
                          >
                            <AlertDialogCancel
                              variant="ghost"
                              className={`${font.className} mt-0 rounded-full bg-white px-4 py-2 font-light text-wedding-100 hover:bg-white/70`}
                              asChild
                            >
                              <button type="button">Cancel</button>
                            </AlertDialogCancel>
                            <AlertDialogAction
                              asChild
                              className={`${font.className} rounded-full bg-wedding-100/90 px-4 py-2 font-light hover:bg-wedding-100 `}
                            >
                              <button type="submit">Save changes</button>
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </form>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </div>
                <p
                  className={`${onest.className} text-xs font-normal text-wedding-100`}
                  data-aos="fade"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  {moment(message.postTime).format("MMM DD, YYYY HH:mm")}
                </p>
                <p
                  className={`${onest.className} text-sm font-light text-wedding-100`}
                  data-aos="fade"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  {awaitMessage ? message.message : "Awaiting New Message..."}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
      {data.length > 4 && totalLoaded + 1 <= count && (
        <button
          onClick={handleLoadMore}
          disabled={awaitLoad}
          className={`${font.className} flex items-center gap-2 rounded-full bg-wedding-600 px-4 py-2 text-sm font-light transition duration-200  hover:bg-wedding-700 disabled:bg-wedding-600/50`}
        >
          {awaitLoad && (
            <AiOutlineLoading3Quarters className="animate-spin"></AiOutlineLoading3Quarters>
          )}
          Load more
        </button>
      )}
    </>
  );
}
