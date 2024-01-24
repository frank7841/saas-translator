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
import { signIn, signOut } from 'next-auth/react'
 

export default function UserButton({session}:{session:Session | null}) {
  if(!session) return(
    <Button variant={'outline'} onClick={() => signIn()} >
        Sign In
    </Button>
  )
  
  
    return session && (
    <div>
            <DropdownMenu>
                <DropdownMenuTrigger> 
                    <UserAvatar name={session.user?.name!} image={session.user?.image!}/>
                 </DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuItem>
                    {session.user?.name}
                </DropdownMenuItem>
                <DropdownMenuItem  onClick={()=>signOut()}>
                    Sign Out
                </DropdownMenuItem>
                
            </DropdownMenuContent>
        </DropdownMenu> 
    </div>
  )
}

