import styles from './styles.module.scss';

type TextAreaProps = {
  value: string;
  placeholder: string;
  isValid: string;
  name: string;
  errorMessage: string;
  onChange: (value: string, name: string) => void;
  rows: number;
};

export default function TextArea({
  value,
  placeholder,
  isValid,
  name,
  errorMessage,
  onChange,
  rows,
}: TextAreaProps) {
  return (
    <div className={styles.textAreaContainer} role={isValid}>
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={({
          target: { value, name },
        }: React.ChangeEvent<HTMLTextAreaElement>) => onChange(value, name)}
        rows={rows}
      />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
}
