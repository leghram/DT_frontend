import MenuItem from "./MenuItem";

function Navbar() {
  return (
    <div className="w-full flex flex-col items-center my-[2rem]">
      <MenuItem urlPage="/" namePage="Dashboard" />
      <MenuItem urlPage="/users" namePage="Users" />
    </div>
  );
}

export default Navbar;
