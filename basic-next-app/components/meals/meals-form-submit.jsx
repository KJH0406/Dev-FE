"use client"

import { useFormStatus } from "react-dom"

const MealsFormSubmit = () => {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending}>
      {pending ? "공유 중.." : "음식 공유하기"}
    </button>
  )
}

export default MealsFormSubmit
