

const InfoAddress = () => {

  return (
    <table className="flex text-xl flex-col justify-center relative bg-white rounded-2xl shadow-xl w-3/4 desktop:top-12 p-5 desktop:h-1/2 ">
      <tbody className="flex flex-col">
        <tr className="flex flex-col gap-1 desktop:flex-row justify-around items-center">
          <td className="flex flex-col items-center desktop:items-start"><h2 className="text-base">IP ADDRESS</h2><p className="font-bold ">192.212.174.101</p></td>
          <td><div className="none desktop:w-0.5 desktop:h-14 desktop:bg-gray-300"></div></td>
          <td className="flex flex-col items-center desktop:items-start"><h2 className="text-base">LOCATION</h2><p className="font-bold ">Brooklyn, NY 10001</p></td>
          <td><div className="none desktop:w-0.5 desktop:h-14 desktop:bg-gray-300"></div></td>
          <td className="flex flex-col items-center desktop:items-start"><h2 className="text-base">TIMEZONE</h2><p className="font-bold ">UTC -05:00</p></td>
          <td><div className="none desktop:w-0.5 desktop:h-14 desktop:bg-gray-300"></div></td>
          <td className="flex flex-col items-center desktop:items-start"><h2 className="text-base">ISP</h2><p className="font-bold ">SpaceX Starlink</p></td>
        </tr>
      </tbody>
    </table>
  )
}

export default InfoAddress;
