import InfoAddress from "./InfoAddress";


const Navbar = () =>{

    return (
        <div className="flex items-center justify-around bg-bgmobile bg-no-repeat bg-cover desktop:bg-bgdesktop h-[20rem] ">
            <div className="flex flex-col items-center">
                <h1 className="font-ribik font-bold text-3xl text-white">IP Address Tracker </h1>
                <div>
                    <input type="text" placeholder="Search for any IP address or domain" />
                    <button className="text-white bg-very_dark_gray">&gt;</button>
                </div>
                <div>
                    <InfoAddress/>
                </div>
            </div>
        </div>
        )
}

export default Navbar;

