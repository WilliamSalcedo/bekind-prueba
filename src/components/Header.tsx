export const Header = () => {
  return (
    <header className="w-full h-14 bg-[#1A1F4A] flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <img
          src="/logo-header.png"
          alt="BeKind Network"
          className="h-6 w-auto"
        />
      </div>

      <div className="flex items-center gap-3">
        <div
          className="
            w-8 h-8
            rounded-full
            bg-yellow-400
            text-black
            flex items-center justify-center
            text-sm font-semibold
          "
        >
          A
        </div>
      </div>
    </header>
  );
};
