import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

import { Control } from 'react-hook-form'
import { z } from 'zod'
// import { authFormSchema } from '@/lib/utils'

// const formSchema = authFormSchema('sign-up')
const formSchema = z.object({
    email: z.string().email()
      .min(3, { message: "Email is too short" })
      .max(255, { message: "Email is too long" }),
    password: z.string()
      .min(8, { message: "Password is too short" })
      
  })

interface CustomInput {
    control: Control,
    name : string,
    label : string,
    placeholder : string,
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input 
                placeholder={placeholder}
                className="input-class"
                type={name === 'password' ? 'password' : 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput