"use client";
import Image from "next/image";
import { Albert_Sans } from "next/font/google";
import moment from "moment";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useSWR from "swr";
import TextareaAutosize from "react-textarea-autosize";
import { editMessage, sendMessage } from "@/lib/clientFetch";
import { toast, Toaster } from "sonner";
import { Zoom, Fade } from "react-reveal";
import { Minus, Pin, Plus } from "lucide-react";

const albertSans = Albert_Sans({ subsets: ["latin"] });

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Wish({ id, name }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [range, setRange] = useState("");
  const [awaitMessage, setAwaitMessage] = useState(true);
  const [loadMore, setLoadMore] = useState(0);
  const [awaitLoad, setAwaitLoad] = useState(false);
  const [totalLoaded, setTotalLoaded] = useState(4);
  const [counter, setCounter] = useState(0);
  const [rsvp, setRsvp] = useState("Yes, I will be there");

  const { data, isLoading, error, mutate } = useSWR(`/api/messages`, fetcher, {
    revalidateOnFocus: false,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className="mx-auto flex w-full items-center justify-center gap-2 p-10 sm:w-3/4 md:w-2/3 lg:w-1/2">
        <AiOutlineLoading3Quarters className="animate-spin" />
        <p
          className={`${albertSans.className} text-xl font-light text-wedding-100`}
        >
          Loading...
        </p>
      </div>
    );

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
        name: name,
        message: message,
        peopleCount: counter + 1,
        rsvp: rsvp,
      };

      if (name == "" || name == null) {
        toast.error("Sorry:( you are not able to send wishes");
        setMessage("");
      } else {
        setLoading(true);
        setTimeout(async () => {
          await sendMessage(data);
          setMessage("");
          setCounter(0);
          await mutate();
          setLoading(false);
        }, 2000);
      }
    }
  };

  return (
    <section className="bg-invitation-100 mt-10 flex flex-col p-5 sm:items-center sm:justify-center sm:p-5">
      <div className="relative mt-10 flex w-full flex-col items-end gap-3 sm:w-3/4 md:w-2/3 lg:w-1/2">
        <Toaster position="top-center" reverseOrder={false} closeButton />
        <Fade left>
          <div className="absolute -left-20 -top-10 h-[250px] w-[250px] sm:right-10">
            <Image
              src={"/illustration/Chandelier.png"}
              alt="background"
              width={500}
              height={500}
              className={"opacity-30"}
            />
          </div>
        </Fade>
        <Fade bottom>
          <p className="font-seasons relative mb-2 text-xl">THE WISHES</p>
          <div className="relative mb-3 h-0.5 w-10 bg-zinc-400 "></div>
        </Fade>
        <Fade bottom>
          <p className="font-montserrat text-invitation-100 relative mt-3 text-3xl hover:cursor-default">
            Wedding Wish
          </p>
        </Fade>
      </div>

      {name !== null && (
        <div className="border-wedding-75/50 mt-16 flex w-full flex-col items-center justify-center gap-3  border-t py-5 sm:w-3/4 md:w-2/3 lg:w-1/2">
          <Fade bottom>
            <p
              className={`text-wedding-75 text-center font-garet text-xl`}
            >{`Dear ${name === null ? "" : name}, please write your wishes`}</p>
          </Fade>
          <Fade bottom>
            <form
              className="flex w-full flex-col items-center justify-center gap-3"
              onSubmit={handleSubmit}
            >
              <TextareaAutosize
                required
                className={`text-wedding-75 w-full rounded-md bg-white p-2 font-garet font-light focus-visible:outline-none`}
                placeholder={`Your wishes`}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <p className="font-montserrat mt-3 text-sm">Will you attend?</p>
              <select
                name="rsvp"
                className="text-wedding-75 w-full rounded-md bg-white p-2 font-garet font-light focus-visible:outline-none"
                value={rsvp}
                onChange={(e) => setRsvp(e.target.value)}
                required
              >
                <option value="Yes">Yes, I will be there.</option>
                <option value="No">😥 Sorry I cannot attend.</option>
              </select>
              <p className="font-montserrat mt-3 text-sm">People you bring</p>

              <div className="mb-5 flex w-full items-center justify-between gap-3 font-garet">
                <button
                  type="button"
                  className="bg-invitation-500 rounded-lg p-2 text-white transition active:scale-90"
                  onClick={() => {
                    if (counter > 0) {
                      setCounter(counter - 1);
                    }
                  }}
                >
                  <Minus />
                </button>
                <p className="text-invitation-600 bg-invitation-500/20 w-full rounded-lg py-2 text-center text-2xl">
                  {counter}
                </p>
                <button
                  type="button"
                  className="bg-invitation-500 rounded-lg p-2 text-white transition active:scale-90"
                  onClick={() => {
                    if (counter < 2) {
                      setCounter(counter + 1);
                    }
                  }}
                >
                  <Plus />
                </button>
              </div>
              <button
                disabled={loading || id == null}
                className={`flex items-center gap-2 rounded-full bg-wedding-100 px-4 py-2 text-white disabled:cursor-not-allowed ${albertSans.className} mb-5 w-fit font-light transition duration-200 hover:bg-wedding-100 disabled:bg-wedding-100/50`}
              >
                {loading && (
                  <AiOutlineLoading3Quarters className="animate-spin"></AiOutlineLoading3Quarters>
                )}
                Send and Confirm
              </button>
            </form>
          </Fade>
        </div>
      )}
      <div className="mt-10 flex w-full flex-col flex-col-reverse gap-3 pt-5 sm:w-3/4 md:w-2/3 lg:w-1/2">
        {filteredData
          .filter((item) => item.rowId == 3)
          .map((item) => {
            return (
              <div
                className="border-wedding-75/50 flex flex-col border-b"
                key={item.rowId}
              >
                <Fade bottom>
                  <p
                    className={`font-montserrat text-wedding-75 relative flex items-center gap-2 text-base font-medium`}
                  >
                    {item.name}{" "}
                    <span className="flex items-center text-xs font-light italic">
                      <Pin className="h-3 w-3" />
                      Pinned
                    </span>
                  </p>
                  <p className={`text-wedding-25 relative font-garet text-xs`}>
                    {moment(item.postTime).format("MMM DD, YYYY HH:mm")}
                  </p>
                  <p
                    className={`text-wedding-75 mb-2 font-garet text-sm font-light`}
                  >
                    {item.message}
                  </p>
                </Fade>
              </div>
            );
          })}
      </div>

      <div className="mt-3 flex w-full flex-col flex-col-reverse gap-3 pb-10 sm:w-3/4 md:w-2/3 lg:w-1/2">
        {filteredData
          .filter((item) => item.rowId != 3)
          .map((item) => {
            return (
              <div
                className="border-wedding-75/50 flex flex-col border-b"
                key={item.rowId}
              >
                <Fade>
                  <p
                    className={`font-montserrat text-wedding-75 relative text-base font-medium `}
                  >
                    {item.name}
                  </p>
                  <p className={`text-wedding-25 relative font-garet text-xs`}>
                    {moment(item.postTime).format("MMM DD, YYYY HH:mm")}
                  </p>
                  <p
                    className={`text-wedding-75 mb-2 font-garet text-sm font-light`}
                  >
                    {item.message}
                  </p>
                </Fade>
              </div>
            );
          })}
      </div>
      <Fade bottom>
        <div className="flex justify-center">
          {data.length > 4 && totalLoaded + 1 <= count && (
            <button
              onClick={handleLoadMore}
              disabled={awaitLoad}
              className={`flex w-fit items-center gap-2 rounded-full bg-wedding-100 px-4 py-2 font-garet text-sm text-white disabled:cursor-not-allowed disabled:opacity-50`}
            >
              {awaitLoad && (
                <AiOutlineLoading3Quarters className="animate-spin"></AiOutlineLoading3Quarters>
              )}
              Load more
            </button>
          )}
        </div>
      </Fade>
    </section>
  );
}
