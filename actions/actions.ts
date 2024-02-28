'use server'

import { revalidatePath } from "next/cache"

export const refreshFeed = async() => revalidatePath('/')