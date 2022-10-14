import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { Text } from '../Text';

export interface CheckboxProps {
  children : string
}

export function Checkbox({children }: CheckboxProps): JSX.Element {
  return (
    <div className='flex items-center gap-2'>
      <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'>
        <CheckboxPrimitive.Indicator asChild>
          <Check weight='bold' className='h-5 w-5 text-cyan-500' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <Text size='sm'>{children}</Text>
    </div>

  )
}
