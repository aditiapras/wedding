export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-invitation-100 p-5 text-invitation-600">
      <p className="font-altha text-6xl">lettré</p>
      <p className="text-center font-garet text-sm text-invitation-500">
        Noun. lettre f (plural lettres) letter (written character) letter
        (written message).
      </p>
      <div className="absolute bottom-0 left-0 w-full bg-invitation-500 py-2 text-center font-garet text-xs text-white">
        <p>Powered by lettre.id</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
