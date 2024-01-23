import InfoAddress from "./InfoAddress";
import SearchIp from "./SearchIp";


const Navbar = () =>{

    return (
        <div className="flex justify-center bg-bgmobile desktop:justify-around  bg-no-repeat bg-cover desktop:bg-bgdesktop w-full h-[20rem] ">
            <div className="flex flex-col items-center justify-evenly h-full w-full mt-28 desktop:mt-7 gap-5">
                <h1 className="font-ribik font-bold text-3xl text-white">IP Address Tracker </h1>
                    <SearchIp/>
                    <InfoAddress/>
            </div>
        </div>
        )
}

export default Navbar;

