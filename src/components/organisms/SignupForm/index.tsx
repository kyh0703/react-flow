import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import tw, { styled, css } from 'twin.macro'

import Button from '@/components/atoms/Button'

export type SignupFormData = {
  email: string
  username: string
  password: string
  passwordConfirm: string
}

type SignupFormProps = {
  onSignup?: (email: string, username: string, password: string) => void
}

const SignupForm = ({ onSignup }: SignupFormProps) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('이메일을 입력해주세요.')
      .email('이메일 형식이 아닙니다.'),
    username: Yup.string()
      .required('이름을 입력해주세요.')
      .min(2, '이름은 2글자 이상입니다.')
      .max(20, '이름은 20글자 이하입니다.'),
    password: Yup.string()
      .required('비밀번호를 입력해주세요.')
      .min(6, '비밀번호는 6글자 이상입니다.')
      .max(20, '비밀번호는 20글자 이하입니다.'),
    passwordConfirm: Yup.string()
      .required('비밀번호 확인을 입력해주세요.')
      .oneOf([Yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormData>({
    resolver: yupResolver(validationSchema),
  })

  const values = {
    email: watch('email'),
    username: watch('username'),
    password: watch('password'),
    passwordConfirm: watch('passwordConfirm'),
  }

  const isButtonDisabled =
    !values.email ||
    !values.username ||
    !values.password ||
    !values.passwordConfirm

  const onSubmit = (data: SignupFormData) => {
    const { email, username, password } = data
    onSignup && onSignup(email, username, password)
  }

  return (
    <>
      <div tw="mb-0.5"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div tw="mb-0.5"></div>
        <div tw="mb-0.5"></div>
        <div tw="mb-0.5"></div>
        <div tw="mb-0.5"></div>
        <Button tw="w-full" type="submit" disabled={isButtonDisabled}>
          회원가입
        </Button>
      </form>
      <div tw="flex justify-center">
        <span></span>
      </div>
    </>
  )
}

export default SignupForm
