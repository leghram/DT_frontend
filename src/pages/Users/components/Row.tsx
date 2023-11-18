import { UserUI } from "../../../types/users";

interface IProps {
  objecto: UserUI;
}

function Row({ objecto }: IProps) {
  return (
    <tr className="odd:bg-clear even:bg-white hover:bg-primary/90 hover:text-white ">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {objecto.id}
      </th>
      <td className="px-6 py-4">{objecto.nombres}</td>
      <td className="px-6 py-4">{objecto.username}</td>
      <td className="px-6 py-4">
        <button type="button" className="font-medium hover:underline">
          {objecto.componente}
        </button>
      </td>
    </tr>
  );
}

export default Row;
