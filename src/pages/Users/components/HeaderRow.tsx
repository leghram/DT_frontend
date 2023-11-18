import { HEADER_USERS } from "../../../constants";

function HeaderRow() {
  return (
    <tr className="bg-white py-[20px] text-[1rem]">
      <th scope="col" className="px-6 py-3">
        {HEADER_USERS.id}
      </th>
      <th scope="col" className="px-6 py-3">
        {HEADER_USERS.nombres}
      </th>
      <th scope="col" className="px-6 py-3">
        {HEADER_USERS.username}
      </th>
      <th scope="col" className="px-6 py-3">
        {HEADER_USERS.componente}
      </th>
    </tr>
  );
}

export default HeaderRow;
