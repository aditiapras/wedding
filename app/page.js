export default function Home() {
  return (
    <div className="bg-invitation-100 text-invitation-600 relative flex min-h-screen w-full flex-col items-center justify-center p-5">
      {/* <p className={`font-garet text-xl text-wedding-100`}>The Wedding of</p>
      <p className={`font-seasons text-5xl text-wedding-100`}>Aning & Adit</p>
      <p className={`text font-garet text-wedding-100`}>20th January, 2024</p> */}
      {/* <p className="text-invitation-600 text-3xl">Custom Design Invitation</p> */}

      <p className="font-altha text-6xl">lettré</p>
      <p className="text-invitation-500 text-center font-garet text-sm">
        Noun. lettre f (plural lettres) letter (written character) letter
        (written message).
      </p>
      <div className="bg-invitation-500 absolute bottom-0 left-0 w-full py-2 text-center font-garet text-xs text-white">
        <p>Powered by lettre.id</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
