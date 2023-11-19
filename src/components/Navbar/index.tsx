import MenuItem from "./MenuItem";

function Navbar() {
  return (
    <div className="w-full flex md:flex-col items-center md:my-[2rem]">
      <MenuItem urlPage="/" namePage="Dashboard" />
      <MenuItem urlPage="/users" namePage="Users" />
    </div>
  );
}

export default Navbar;
