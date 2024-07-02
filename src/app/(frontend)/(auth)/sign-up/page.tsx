'use client'

import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
// import { Checkbox } from '@/components/ui/checkbox'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { cn } from '@/lib/utils'

import { AuthCredentialValidator, AuthCredential } from '@/lib/validators/AuthCredential'

export default function SignUpDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthCredential>({
    resolver: zodResolver(AuthCredentialValidator),
  })

  const onSubmit = ({ email, password }: AuthCredential) => {
    console.log(email, password)
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="flex items-center">
            Account anlegen
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Account anlegen</DialogTitle>
            <DialogDescription className="py-2">
              Bitte melde dich an, um bei uns einkaufen zu können:
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input id="firstName" placeholder="Mike" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input id="lastName" placeholder="Moeglich" required />
                </div>
              </div> */}
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input
                  {...register('email')}
                  className={cn({ 'focus-visible:ring-red-500': errors.email })}
                  id="email"
                  type="email"
                  placeholder="mike@moeglich.de"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Passwort</Label>
                <Input
                  {...register('password')}
                  className={cn({ 'text-red-500': errors.password })}
                  id="password"
                  type="password"
                  placeholder="*****"
                  required
                />
              </div>
              <div className="items-top flex space-x-2 py-4">
                {/* <Checkbox id="terms" required /> */}
                <div className="grid gap-1.5 leading-none">
                  {/* <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Hiermit stimme ich den Nutzungs-
                    <br />
                    und Datenschutzbestimmungen zu.
                  </label> */}
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Mit deiner Anmeldung stimmst du unseren AGB zu.
                  </p>
                </div>
              </div>
            </form>
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full">
              Kostenlos registrieren
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
