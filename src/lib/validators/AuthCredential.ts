import { z } from 'zod'

export const AuthCredentialValidator = z.object({
  email: z.string().email({ message: 'Bitte gib eine gueltige E-Mail Adresse an.' }),
  password: z.string().min(8, { message: 'Das Passwort muss mindestens 8 Zeichen lang sein.' }),
})

export type AuthCredential = z.infer<typeof AuthCredentialValidator>
