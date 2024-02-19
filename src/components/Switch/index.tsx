import { observer, useLocalObservable } from "mobx-react-lite";

interface ISwitchProps {
  defaultValue: boolean;
  isDisabled?: boolean;
  onClick?: (value: boolean) => void;
}

const Switch = observer(
  ({ defaultValue, isDisabled, onClick }: ISwitchProps) => {
    const state = useLocalObservable(() => ({
      isCheck: defaultValue,
      toggle() {
        this.isCheck = !this.isCheck;
      },
    }));

    const handleEvent = () => {
      console.log("prev state.isCheck", state.isCheck);
      state.toggle();
      console.log("after state.isCheck", state.isCheck);
      onClick?.(state.isCheck);
    };

    return (
      <label className="relative inline-block w-12 h-6">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          onChange={handleEvent}
          checked={state.isCheck}
          disabled={isDisabled}
        />
        <span
          className={`absolute cursor-pointer bg-cyan-400 top-0 left-0 right-0 bottom-0 rounded-full transition ${
            isDisabled ? "bg-gray-500" : ""
          }`}
        />
        <span
          className={`absolute cursor-pointer bg-gray-300 ${
            state.isCheck ? "transform translate-x-6" : ""
          }  w-6 h-6 top-0 left-0 rounded-full transition`}
        />
      </label>
    );
  }
);

export default Switch;
