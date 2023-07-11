import style from "./TextInput.module.css";

const defaultProps = {
  label: undefined,
  errorMessage: undefined,
  value: "",
  placeholder: "",
  handleChange: () => undefined,
};

/**
 * Show button
 * @param {string} id
 * @param {string} label
 * @param {boolean} required
 * @param {string} errrorMessage
 * @param {string} placeholder
 * @param {(value: string) => void} handleChange
 * @returns {JSX.Element} JSX.Element
 */

const InputText = ({
  id,
  label,
  errorMessage,
  value,
  placeholder,
  handleChange,
}: {
  id: string;
  label?: string;
  errorMessage?: string;
  value?: string;
  placeholder?: string;
  handleChange?: (value: string) => void;
}) => (
  <div>
    {label && (
      <label className={style.label} htmlFor={id}>
        {label}
      </label>
    )}
    <input
      className={style.input}
      type="text"
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={(e) => handleChange && handleChange(e.target.value)}
    />
    {typeof errorMessage === "string" && (
      <p className={style.errorMessage}>{errorMessage}</p>
    )}
  </div>
);

InputText.defaultProps = defaultProps;

export default InputText;
