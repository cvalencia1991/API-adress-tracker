import InfoAddress from "./InfoAddress";
import SearchIp from "./SearchIp";

const Navbar = () => {
  return (
    <div className="flex justify-center contrast-150 bg-bgmobile desktop:justify-around  bg-no-repeat bg-cover desktop:bg-bgdesktop w-full z-10">
      <div className="container mx-auto flex relative flex-col items-center justify-evenly h-full w-full top-24 desktop:mt-7 gap-5 desktop:top-0 ">
        <h1 className="font-ribik font-bold text-3xl text-white">
          IP Address Tracker{" "}
        </h1>
        <SearchIp />
        <InfoAddress />
      </div>
    </div>
  );
};

export default Navbar;
