"use server"

import { redirect } from "next/navigation"
import { saveMeal } from "./get-meals"
import { revalidatePath } from "next/cache"

const isInvalidText = (text) => {
  return !text || text.trim() === ""
}

const shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  }

  // BE 유효성 검사
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    }
  }

  await saveMeal(meal)
  revalidatePath("/meals")
  redirect("/meals")
}

export { shareMeal }
