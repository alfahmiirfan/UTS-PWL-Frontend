

function Navbar() {
  return (
    <div className="bg-[#E5C3A6] fixed w-full">
    <div className="header container m-auto  flex justify-between h-[60px] items-center">
        <div className="left text-srWhite font-bold text-[18px]"> <br /> </div>
        <div className="right text-[17px] flex gap-7 ">
        <a href="" className="text-srWhite bg-[#C70039] px-8 py-2 rounded">Logout</a>
        </div>
    </div>
    </div>
  );
}

export default Navbar;
