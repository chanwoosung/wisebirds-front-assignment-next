import { observer } from "mobx-react-lite";

type EnumType = { [key: string]: string };

interface ITableHeaderProps<T extends EnumType> {
  enumObject: T;
}
export const TableHeader = observer(
  <T extends EnumType>({ enumObject }: ITableHeaderProps<T>) => {
    return (
      <thead>
        <tr>
          {Object.values(enumObject).map((key) => (
            <th key={key} className="border border-gray-400 p-2">
              {key}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
);
