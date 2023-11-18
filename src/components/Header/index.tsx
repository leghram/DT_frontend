import ProfilePhoto from "./ProfilePhoto";

interface IProps {
  title: string;
}

function Header({ title }: IProps) {
  return (
    <div className="w-full py-[15px] h-full">
      <div className="flex justify-between items-center h-full">
        <h1 className="pl-[4px] text-[1.5rem] font-bold grow bg-white py-[5px] rounded-xl">
          {title}
        </h1>
        <div className="pl-[30px]">
          <div className="w-full">
            <ProfilePhoto />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
