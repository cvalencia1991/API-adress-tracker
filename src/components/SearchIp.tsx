import React from "react";
import { useState } from "react";
import { fetchIpAddress } from "../features/reducers/ipReducer";
import { useAppDispatch } from "../hooks";

const SearchIp = () => {
  const dispatch = useAppDispatch();
  const [ipAddress, setIpAddress] = useState("");
  const [placeholderMessage, setPlaceholderMessage] = useState(
    "Search for any IP address or domain",
  );

  const regexIp =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

  const submitIpAddress = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (regexIp.test(ipAddress)) {
      dispatch(fetchIpAddress({ ipAddress }));
      setIpAddress("");
    } else {
      setTimeout(() => {
        setIpAddress("");
        setPlaceholderMessage("repeat again please");
      }, 1000);
    }
  };

  return (
    <form
      onSubmit={submitIpAddress}
      className="flex flex-col justify-center w-11/12 desktop:w-1/3 h-12"
    >
      <div className="flex justify-center">
        <input
          onChange={(e) => setIpAddress(e.target.value)}
          id="inputIpAddress"
          value={ipAddress ?? ""}
          aria-label="inputIpAddress"
          className="focus:outline-none rounded-l-xl px-5 w-11/12 desktop:w-full h-12"
          type="text"
          placeholder={placeholderMessage}
        />
        <button
          type="submit"
          aria-label="submit search ip"
          className="flex items-center justify-center w-12 text-white bg-very_dark_gray rounded-r-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchIp;
