import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface IProps {
  urlPage: string;
  namePage: string;
}

function MenuItem({ urlPage, namePage }: IProps) {
  const location = useLocation();
  const [activePage, setActivePage] = useState(false);

  useEffect(() => {
    if (location.pathname === urlPage) {
      setActivePage(true);
    } else {
      setActivePage(false);
    }
  }, [location, urlPage]);

  return (
    <NavLink
      to={`${urlPage}`}
      className={`text-[1.4rem] py-[8px] text-center text-white w-full rounded-md md:rounded-none md:rounded-l-2xl font-500 ${
        activePage && " bg-clear"
      }`}
    >
      <div
        className={`w-[70%] m-auto flex justify-left ${
          activePage && "text-black"
        }`}
      >
        {namePage}
      </div>
    </NavLink>
  );
}

export default MenuItem;
