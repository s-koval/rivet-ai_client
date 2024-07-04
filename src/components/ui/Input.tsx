import { FC, InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
}

const Input: FC<Props> = ({ label, error, register, ...rest }) => (
  <label className="block text-sm mt-2">
    <span className="text-gray-700 dark:text-gray-400">{label}</span>
    <input
      className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
      {...register}
      {...rest}
    />

    {error?.message && (
      <span className="text-xs text-red-600 dark:text-red-400">
        {error.message}
      </span>
    )}
  </label>
);

export default Input;
