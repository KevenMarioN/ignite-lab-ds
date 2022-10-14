import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export interface TextInputRootProps {
  children: ReactNode
}
function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 py-4 px-3 rounded  bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  )
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}

function Input(props: InputProps): JSX.Element {
  return (

    <input
      className={'bg-transparent flex-1 outline-none  text-gray-100 text-xs placeholder:text-gray-400'}
      {...props}
    />
  )
}

TextInputIcon.displayName = 'TextInput.Icon'
Input.displayName = 'TextInput.Input'
TextInputRoot.displayName = 'TextInput.Root'
export const TextInput = {
  Root: TextInputRoot,
  Input,
  Icon: TextInputIcon
}
