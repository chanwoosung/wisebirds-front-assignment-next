import Switch from "@/components/Switch";
import AuthStore from "@/stores/authStore";
import { observer } from "mobx-react-lite";

type ObjectType = { [key: string]: any };

interface ITableBodyProps<T extends ObjectType> {
  data: T[];
}

const TableBody = observer(
  <T extends ObjectType>({ data }: ITableBodyProps<T>) => {
    const keys = Object.keys(data[0]);

    return (
      <tbody>
        {data.map((obj, index) => (
          <tr key={index}>
            {keys.map((key) => (
              <td key={key} className="border border-gray-400 p-2">
                {typeof obj[key] === "boolean" ? (
                  <Switch
                    defaultValue={obj[key]}
                    isDisabled={AuthStore.auth === "Viewer"}
                  />
                ) : (
                  obj[key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
);

export default TableBody;
