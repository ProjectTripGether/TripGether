import { IoIosSearch } from "react-icons/io";

type Props = {};

const SearchBox = (props: Props) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1 shadow-sm w-[44rem]">
      <div className="flex items-center">
        <IoIosSearch size={30} />
        <input
          type="text"
          placeholder="Search place"
          className="ml-2 text-gray-700 placeholder-gray-400 border-none w-[40rem] focus:border-none focus:outline-none focus:ring-0"
        />
      </div>
    </div>
  );
};

export default SearchBox;
