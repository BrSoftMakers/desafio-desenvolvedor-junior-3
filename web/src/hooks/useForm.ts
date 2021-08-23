import { useState } from 'react';

type dataForm = {
  values: any;
  handleChange(event: React.ChangeEvent<any>): void;
  clearForm(): void;
};

const useForm = (initialData: any): dataForm => {
  const [values, setValues] = useState(initialData);

  function handleChange(event: React.ChangeEvent<any>): void {
    const key = event.target.getAttribute('name');
    const { value } = event.target;

    setValues({
      ...values,
      [key]: value,
    });
  }

  function clearForm(): void {
    setValues(initialData);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
};

export default useForm;
