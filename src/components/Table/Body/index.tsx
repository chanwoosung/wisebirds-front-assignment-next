import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

type ObjectType = { [key: string]: any };

interface ITableBodyProps<T extends ObjectType> {
  data: T[];
  cellRenderer?: (obj: T, key: string) => ReactNode;
}

const TableBody = observer(
  <T extends ObjectType>({ data, cellRenderer }: ITableBodyProps<T>) => {
    const keys = Object.keys(data[0]);

    return (
      <tbody>
        {data.map((obj, index) => (
          <tr key={index}>
            {keys.map((key) => (
              <td key={key} className="border border-gray-400 p-2">
                {cellRenderer ? cellRenderer(obj, key) : obj[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
);

export default TableBody;
