"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { Fade, Zoom } from "react-reveal";
import { Disc3, Loader2 } from "lucide-react";
import useSound from "use-sound";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useSearchParams } from "next/navigation";

const lenis = new Lenis();

let images = [
  { url: "/portrait/us/5.jpeg", title: "1" },
  { url: "/portrait/us/6.jpeg", title: "2" },
  { url: "/portrait/us/21.jpeg", title: "3" },
  { url: "/portrait/us/20.jpeg", title: "4" },
];

export default function CustomPage({ data, id }) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [play, { pause }] = useSound("/arabic.mp3");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [playSong, setPlaySong] = useState(false);
  const session = data?.session;
  const params = useSearchParams();
  const name = params.get("to");

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
      setShow(true);
    }, 2000);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  if (show) {
    return (
      <div
        className={`${
          clicked ? "-translate-y-full" : ""
        } mx-auto flex min-h-screen w-full flex-col items-center justify-center transition duration-1000 ease-in-out`}
      >
        <Image
          src={"/illustration/64.png"}
          alt="wedding"
          fill
          className="opacity-[15%]"
          style={{ objectFit: "cover", position: "absolute" }}
          quality={100}
        />
        <div className="from-wedding-50 absolute bottom-0 z-10 h-1/3 w-full bg-gradient-to-t to-transparent"></div>
        <div className="from-wedding-50 absolute top-0 z-10 h-1/3 w-full bg-gradient-to-b to-transparent"></div>
        <div className="relative z-20 mt-10  flex flex-col items-center justify-center">
          <div className="my-16 flex flex-col items-center justify-center gap-2">
            <Fade top>
              <p className="text-invitation-600 font-montserrat relative text-xl md:text-3xl">
                The Wedding of
              </p>
            </Fade>
            <Zoom>
              <p className="text-invitation-600 font-seasons text-5xl italic">
                Aning <span className="">&</span> Adit
              </p>
            </Zoom>
            <Fade bottom>
              <p className="text-invitation-600 font-garet text-lg">
                20th January 2024
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <button
              onClick={() => {
                setClicked(true);
                setTimeout(() => {
                  setShow(false);
                }, 1000);
                play();
                setPlaySong(true);
              }}
              className="font-montserrat bg-invitation-400 hover:bg-invitation-300 relative rounded-full px-4 py-2 text-white transition duration-200 active:scale-95"
            >
              Buka Undangan
            </button>
          </Fade>
        </div>
      </div>
    );
  }

  if (!mounted)
    return (
      <div className="bg-wedding-50 text-wedding-75 relative flex min-h-screen items-center justify-center">
        <Image
          src={"/bg/6.png"}
          alt="wedding"
          width={500}
          height={500}
          className="absolute right-0"
        />
        <Image
          src={"/bg/5.png"}
          alt="wedding"
          width={500}
          height={500}
          className="absolute left-0"
        />
        <div className="relative flex items-center gap-2">
          <Loader2 className=" animate-spin" />
          <p className="font-garet text-2xl">Please wait...</p>
        </div>
      </div>
    );

  return (
    <>
      {!show && (
        <main className="text-invitation-600 bg-invitation-100 font-seasons relative">
          <button
            className="bg-invitation-600 fixed bottom-5 left-5 z-30 rounded-full p-2 text-zinc-400 transition active:scale-90"
            onClick={() => {
              setPlaySong(!playSong);
              if (playSong) {
                pause();
              } else {
                play();
              }
            }}
          >
            <Disc3
              className={`
                ${playSong ? "animate-[spin_3s_linear_infinite]" : ""} h-8 w-8 
              `}
            />
          </button>

          {/* Opening */}
          <section className="bg-invitation-100 text-wedding-75 relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
            <div
              className={`font-montserrat relative flex w-full flex-col font-bold sm:w-3/4 md:w-2/3 lg:w-1/2`}
            >
              <div className="absolute right-5 top-5 flex flex-col items-center justify-center">
                <p className=" text-xl">20</p>
                <p className=" text-xl">/</p>
                <p className=" text-xl">01</p>
              </div>
            </div>

            <Fade bottom>
              <div className="absolute h-[760px] w-[650px] overflow-hidden md:h-[600px] md:w-[600px]">
                <Image
                  src={"/illustration/64.png"}
                  alt="background"
                  width={1000}
                  height={1000}
                  className={"opacity-20"}
                />
                <div className="from-invitation-100 absolute -bottom-3 h-32 w-full bg-gradient-to-t to-transparent"></div>
              </div>
            </Fade>

            <Fade bottom cascade>
              <div className="relative flex h-screen w-full flex-col items-center justify-center sm:w-3/4 md:w-2/3 lg:w-1/2">
                <p
                  className={`font-seasons w-[200px] text-center text-4xl font-bold md:w-[300px] md:text-5xl`}
                >
                  WEDDING
                </p>
                <p
                  className={`font-seasons w-[200px] text-center text-4xl font-bold md:w-[300px] md:text-5xl`}
                >
                  INVITATION
                </p>
              </div>
            </Fade>

            <div
              className={`relative flex w-full flex-col sm:w-3/4 md:w-2/3 lg:w-1/2`}
            >
              <Image
                src={"/illustration/Logo AA.png"}
                alt="logo"
                width={60}
                height={60}
                className="absolute bottom-5 right-5"
              />
            </div>
          </section>

          {/* BRIDE AND GROOM */}
          <section className="bg-invitation-100 mt-0 flex min-h-screen flex-col overflow-hidden p-5 sm:items-center sm:justify-center sm:p-5">
            <div className="relative flex w-full flex-col items-start gap-3 sm:w-3/4 md:w-2/3 lg:w-1/2">
              <Fade right>
                <div className="absolute right-0 h-[208px] w-[275px]">
                  <Image
                    src={"/illustration/Flower vase.png"}
                    alt="wedding"
                    width={500}
                    height={500}
                    className="opacity-20"
                  />
                </div>
              </Fade>
              <Fade bottom>
                <p className="font-seasons mb-2 text-xl uppercase">
                  The Invite
                </p>
              </Fade>
              <Fade bottom>
                <div className="bg-invitation-500 mb-3 h-0.5 w-10 "></div>
              </Fade>

              <Fade bottom>
                <p
                  className={`text-invitation-600 font-garet text-sm font-light`}
                >
                  Bismillahirrahmanirrahim
                </p>
              </Fade>
              <Fade bottom>
                <p
                  className={`text-invitation-600 font-garet text-sm font-light`}
                >
                  Assalamualaikum Warahmatullahi Wabarakatuh
                </p>
              </Fade>
              <Fade bottom>
                <p
                  className={`text-invitation-600 font-garet text-sm font-light`}
                >
                  Kepada Yth.{" "}
                  {name === null || name === "" ? "Tamu Undangan" : name}
                </p>
              </Fade>
              <Fade bottom>
                <p
                  className={`text-invitation-600 w-4/3 font-garet text-sm font-light sm:w-1/2 md:w-1/2 lg:w-1/3`}
                >
                  Dengan memohon rahmat dan ridho Allah SWT. kami bermaksud
                  menyelenggarakan Akad Nikah dan Resepsi Pernikahan putra-putri
                  kami,
                </p>
              </Fade>

              <Fade bottom>
                <div className="mt-10 flex w-full flex-col items-end">
                  <p className={`font-seasons mb-2 text-xl uppercase`}>
                    The Bride and The Groom
                  </p>
                  <div className="bg-invitation-500 mb-3 h-0.5 w-10 "></div>
                </div>
              </Fade>

              <div className="flex w-full flex-col gap-5">
                <div className="relative flex w-full flex-col">
                  <Zoom>
                    <div className="absolute right-16 w-[250px] md:right-8 md:w-[350px]">
                      <Image
                        src={"/wedding/3.png"}
                        alt="wedding"
                        width={300}
                        height={300}
                      />
                    </div>
                  </Zoom>

                  <Fade bottom>
                    <div className="relative mt-5 flex w-full justify-end">
                      <div className="w-[225px] md:w-[300px]">
                        <Image
                          src={"/portrait/aning.png"}
                          alt="wedding"
                          width={350}
                          height={350}
                        />
                      </div>
                    </div>
                  </Fade>

                  <Fade bottom cascade>
                    <div className="relative mt-1 flex w-full flex-col">
                      <p
                        className={`font-seasons text-right text-2xl md:text-3xl`}
                      >
                        Masning Maunah S.P.
                      </p>
                      <p
                        className={`text-wedding-25 text-right font-garet text-sm`}
                      >
                        Putri kelima dari Bapak Drs. H. M Mulyono dan
                      </p>
                      <p
                        className={`text-wedding-25 text-right font-garet text-sm`}
                      >
                        Ibu Hj. Nining Raniah S.E.
                      </p>
                    </div>
                  </Fade>
                </div>

                <div className="relative mt-10 flex w-full flex-col">
                  <Zoom>
                    <div className="absolute -top-10 left-10 w-[250px] md:left-16 md:w-[350px]">
                      <Image
                        src={"/wedding/3.png"}
                        alt="wedding"
                        width={300}
                        height={300}
                        className="rotate-90"
                      />
                    </div>
                  </Zoom>

                  <Fade bottom>
                    <div className="relative w-[225px] md:w-[300px]">
                      <Image
                        src={"/portrait/adit.png"}
                        alt="wedding"
                        width={350}
                        height={350}
                        className="opacity-100"
                      />
                    </div>
                  </Fade>

                  <Fade bottom cascade>
                    <div className="relative mt-1 flex w-full flex-col">
                      <p
                        className={`font-seasons text-left text-2xl md:text-3xl`}
                      >
                        Aditia Prasetian S.T.
                      </p>
                      <p className={`text-wedding-25 mt-1 font-garet text-sm`}>
                        Putra keempat dari Bapak Cece Rustandi dan
                      </p>
                      <p className={`text-wedding-25 font-garet text-sm`}>
                        Ibu (Almh) Setia Komala
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </section>

          {/* DATE AND VENUE */}
          <section className="bg-invitation-100 relative mt-10 flex flex-col overflow-hidden p-5 sm:items-center sm:justify-center sm:p-5">
            <div className="relative flex w-full flex-col items-start gap-3 sm:w-3/4 md:w-2/3 lg:w-1/2">
              <Fade bottom>
                <p className="font-seasons relative mb-2 text-xl uppercase">
                  The Date and The Venue
                </p>
                <div className="bg-invitation-500 relative mb-3 h-0.5 w-10"></div>
              </Fade>

              <div className="relative flex w-full flex-col items-start gap-0">
                <Fade right>
                  <div className="absolute -right-1/2 -top-10 md:-right-10">
                    <Image
                      src={"/illustration/65.png"}
                      alt="background"
                      width={500}
                      height={500}
                      className="opacity-20"
                    />
                  </div>
                </Fade>
                <Fade bottom>
                  <p
                    className={`font-montserrat relative mb-3 text-2xl font-medium md:text-3xl`}
                  >
                    Akad Nikah
                  </p>
                  <p className={`relative font-garet text-sm md:text-lg`}>
                    Jum&apos;at, 19 Januari 2024
                  </p>
                  <p
                    className={`font-montserrat relative text-sm font-bold md:text-lg`}
                  >
                    08:30~10:30
                  </p>
                  <p className={`relative font-garet text-sm md:text-lg`}>
                    Masjid Riyadhul Jannah Al Maunah
                  </p>
                  <p className={`relative font-garet text-sm md:text-lg`}>
                    Perum Kodam Blok A No. 27
                  </p>
                  <p
                    className={`relative text-right font-garet text-sm md:text-lg`}
                  >
                    Kec. Mustikajaya, Kota Bekasi,
                  </p>
                  <p
                    className={`relative text-right font-garet text-sm md:text-lg`}
                  >
                    Jawa Barat. 17158. Indonesia.
                  </p>
                </Fade>
              </div>

              <div className="relative mt-16 flex w-full flex-col items-end gap-0">
                <Fade bottom>
                  <p
                    className={`font-montserrat relative mb-3 text-2xl font-medium md:text-3xl`}
                  >
                    Resepsi
                  </p>
                  <p className={`relative font-garet text-sm md:text-lg`}>
                    Sabtu, 20 Januari 2024
                  </p>
                  <p
                    className={`font-montserrat relative text-sm font-bold md:text-lg`}
                  >
                    {session == 1
                      ? "09:00~12:00 (Sesi 1)"
                      : session == 2
                      ? "13:00~15:00 (Sesi 2)"
                      : "09:00~12:00 (Sesi 1)"}
                  </p>
                  <p className={`relative font-garet text-sm md:text-lg`}>
                    Lapangan Parkir SD Rejis
                  </p>
                  <p className={`relative font-garet text-sm md:text-lg`}>
                    Perum Kodam Blok A No. 27
                  </p>
                  <p
                    className={`relative text-right font-garet text-sm md:text-lg`}
                  >
                    Kec. Mustikajaya, Kota Bekasi,
                  </p>
                  <p
                    className={`relative text-right font-garet text-sm md:text-lg`}
                  >
                    Jawa Barat. 17158. Indonesia.
                  </p>
                </Fade>
              </div>
              <Fade bottom>
                <p
                  className={`relative mt-10 w-full text-center font-garet text-sm md:text-lg`}
                >
                  Merupakan suatu kehormatan dan kebagahiaan bagi kami apabila
                  Bapak/Ibu/Saudara/i berkenan hadir untuk memberika do&apos;a
                  restu kepada kedua mempelai.
                </p>
              </Fade>
              <Fade bottom>
                <div className="mt-5 flex w-full justify-center">
                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240120T020000Z%2F20240120T080000Z&details=Assalamualaikum%20Warahmatullahi%20Wabarakatuh%2C%20with%20the%20blessing%20and%20mercy%20from%20Allah%20SWT%20We%20cordially%20invite%20you%20to%20the%20wedding%20of%20Aning%20%26%20Adit%20as%20they%20exchange%20vows%20and%20start%20their%20journey%20together%20as%20one.&location=Bekasi&text=Wedding%27s%20of%20Aning%20%26%20Adit%20"
                    target="_blank"
                    className={`text-wedding-75  bg-invitation-500 hover:bg-invitation-500/80 text-md relative w-fit rounded-full px-4 py-2 font-garet text-white transition duration-200`}
                  >
                    Tambahkan ke Kalender
                  </a>
                </div>
                <div className="mt-2 flex w-full justify-center">
                  <a
                    href="https://maps.app.goo.gl/Zv5AiFmqf1cuAAKy5"
                    target="_blank"
                    className={`text-wedding-75  bg-invitation-500 hover:bg-invitation-500/80 text-md relative w-fit rounded-full px-4 py-2 font-garet text-white transition duration-200`}
                  >
                    Lihat Peta
                  </a>
                </div>
              </Fade>
            </div>
          </section>

          {/* PORTRAITS */}
          <section className="bg-invitation-100 mt-10 flex flex-col">
            <div className="relative mx-auto flex w-full flex-col sm:w-3/4 md:w-2/3 lg:w-1/2">
              <div className="flex w-full flex-col px-5 md:px-0">
                <Fade bottom>
                  <p className="font-seasons mb-2 text-xl uppercase">
                    THE PORTRAITS
                  </p>
                </Fade>
                <Fade bottom>
                  <div className="bg-invitation-500 mb-3 h-0.5 w-10"></div>
                </Fade>
              </div>

              <div className="relative mt-5 flex w-full flex-col items-end gap-3 overflow-hidden pb-16">
                <Zoom>
                  <div
                    className="w-[70%] hover:cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                      setIndex(3);
                    }}
                  >
                    <Image
                      src={"/portrait/us/20.jpeg"}
                      alt="wedding"
                      width={1000}
                      height={1500}
                    />
                  </div>
                </Zoom>
                <Zoom>
                  <div
                    className="absolute -left-3 bottom-0 z-10 w-[50%] hover:cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                      setIndex(2);
                    }}
                  >
                    <Image
                      src={"/portrait/us/21.jpeg"}
                      alt="wedding"
                      width={1000}
                      height={1500}
                    />
                  </div>
                </Zoom>
              </div>
              <Fade bottom>
                <p className="text-invitation-500 mb-5 mt-5 px-5 text-center font-garet text-sm italic">
                  &quot;Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia
                  menciptakan pasangan-pasangan untukmu dari (jenis) dirimu
                  sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di
                  antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang
                  demikian itu benar-benar terdapat tanda-tanda (kebesaran
                  Allah) bagi kaum yang berpikir.&quot;
                </p>
                <p className="text-invitation-500 mt-0 px-5 text-center font-garet text-sm italic">
                  (QS. Ar-Ruum: 21)
                </p>
              </Fade>
              <div className="relative mt-5 flex w-full flex-col items-end gap-3 overflow-hidden">
                <Zoom>
                  <div
                    className="w-[50%] hover:cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                      setIndex(1);
                    }}
                  >
                    <Image
                      src={"/portrait/us/6.jpeg"}
                      alt="wedding"
                      width={1000}
                      height={1500}
                    />
                  </div>
                </Zoom>
                <Zoom>
                  <div
                    className="absolute -left-3 top-0 z-10 w-[50%] hover:cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                      setIndex(0);
                    }}
                  >
                    <Image
                      src={"/portrait/us/5.jpeg"}
                      alt="wedding"
                      width={1000}
                      height={1500}
                    />
                  </div>
                </Zoom>
              </div>
              <Fade bottom>
                <p className="text-invitation-500 mb-5 mt-5 px-5 text-center font-garet text-sm italic">
                  &quot;Dan segala sesuatu Kami ciptakan berpasang-pasangan agar
                  kamu mengingat (kebesaran Allah).&quot;
                </p>
                <p className="text-invitation-500 mt-0 px-5 text-center font-garet text-sm italic">
                  (QS. Az Zariyat: 49)
                </p>
              </Fade>
              {open && (
                <Lightbox
                  images={images}
                  onClose={() => setOpen(false)}
                  startIndex={index}
                />
              )}
            </div>
          </section>

          {/* FOOTER */}
          <section className="bg-invitation-100 mt-10 flex h-full flex-col overflow-hidden sm:items-center sm:justify-center">
            <div className="relative flex w-full flex-col items-center gap-3 sm:w-3/4 md:w-2/3 lg:w-1/2">
              <Fade bottom>
                <div className="h-[189px] w-[250px]">
                  <Image
                    src={"/illustration/Flower vase.png"}
                    alt="background"
                    width={500}
                    height={500}
                    className={"opacity-30"}
                  />
                </div>
              </Fade>
              <Fade bottom>
                <p className="font-montserrat relative mb-2 text-sm">
                  WEDDING INVITATION OF
                </p>
                <div className="relative mb-3 h-0.5 w-10 bg-zinc-400 "></div>
                <p className="font-seasons relative text-4xl">
                  Aning <span className="">&</span> Adit
                </p>

                <p className="relative mb-2 font-garet text-sm">
                  Sabtu, 20 Januari 2024.
                </p>
              </Fade>
            </div>
            <Fade bottom>
              <p className="bg-invitation-500 relative mt-10 w-full py-2 text-center font-garet text-xs text-white">
                Powered by{" "}
                <a href="https://lettre.id" target="_blank">
                  lettre.id
                </a>
              </p>
            </Fade>
          </section>
        </main>
      )}
    </>
  );
}
