import { Search } from "lucide-react";

const NavSearch = () => {
  return (
    <div>
      <div className="flex gap-3 border rounded-[30px] px-5 w-100 py-3">
        <Search color="black" />
        <input type="text" placeholder="Search within women's clothes" className="text-black outline-none border-none w-full text-sm" />
      </div>
    </div>
  );
};

export default NavSearch;
