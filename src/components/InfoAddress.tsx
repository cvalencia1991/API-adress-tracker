import { useAppSelector } from "../hooks";
import { selectIpAddress } from "../features/reducers/ipReducer";

const InfoAddress = () => {
  const ipAddress = useAppSelector(selectIpAddress);

  return (
    <table className="flex relative flex-col items-center w-11/12 desktop:w-3/4 desktop:top-12">
      <tbody className="flex h-auto rounded-xl flex-col w-full p-5 bg-white justify-start items-center desktop:flex-row ">
        <tr className="flex flex-col text-center w-full justify-center desktop:items-start">
          <th className="text-base font-light">IP ADDRESS</th>
          <td>
            <h2 className="font-semibold text-2xl">{ipAddress.ip}</h2>
          </td>
        </tr>
        <tr>
          <td>
            <div className="desktop:w-0.5 desktop:h-14 desktop:bg-very_dark_gray"></div>
          </td>
        </tr>
        <tr className="flex flex-col text-center w-full justify-center desktop:px-4 desktop:items-start">
          <th className="text-base font-light">LOCATION</th>
          <td>
            <h2 className="font-semibold text-2xl">
              {ipAddress?.location?.city}
            </h2>
          </td>
        </tr>
        <tr>
          <td>
            <div className="none desktop:w-0.5 desktop:h-14 desktop:bg-very_dark_gray"></div>
          </td>
        </tr>
        <tr className="flex flex-col text-center w-full justify-center desktop:px-4 desktop:items-start">
          <th className="text-base font-light">TIMEZONE</th>
          <td>
            <h2 className="font-semibold text-2xl">
              UTC {ipAddress.location?.timezone}
            </h2>
          </td>
        </tr>
        <tr>
          <td>
            <div className="none desktop:w-0.5 desktop:h-14 desktop:bg-very_dark_gray"></div>
          </td>
        </tr>
        <tr className="flex flex-col text-center w-full justify-center desktop:px-2 desktop:items-start">
          <th className="text-base font-light">ISP</th>
          <td>
            <h2 className="font-semibold text-2xl desktop:text-left">
              {ipAddress.isp}
            </h2>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default InfoAddress;
