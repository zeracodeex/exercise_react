import classNames from "classnames";

export default function Button({ text, variant = "default" }) {
  return (
    <button
      className={classNames({
        "p-4 h-10 flex items-center rounded": true,
        "bg-gray-100": variant === "default",
        "bg-green-600 text-white": variant === "succsess",
        "bg-red text-white": variant === "danger",
        "bg-yellow-300 text-yellow-800": variant === "warning",
      })}
    >
      {text}
    </button>
  );
}
