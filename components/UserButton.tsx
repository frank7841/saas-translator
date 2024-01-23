"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from './UserAvatar'
import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
 

export default function UserButton({session}:{session:Session | null}) {
  if(!session) return(
    <Button variant={'outline'} onClick={()=> signIn()} >
        Sign In
    </Button>
  )
  
  
    return (
    <div>
            <DropdownMenu>
                <DropdownMenuTrigger> 
                    <UserAvatar name='frankline simiyu' image="https://github.com/shadcn.png"/>
                 </DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuItem>
                    My Account
                </DropdownMenuItem>
                <DropdownMenuItem >
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem >
                    Billing
                </DropdownMenuItem>
                <DropdownMenuItem >
                    Subscription
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu> 
    </div>
  )
}

