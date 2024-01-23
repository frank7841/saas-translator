import Link from 'next/link'
import React from 'react'
import logo from '@logos/logo-text.svg'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'

function Logo() {
  return (
    <Link href={'/'} prefetch={false} className='overflow-hidded'>
        <div className='flex items-center w-72 h-14'>
            <AspectRatio ratio={16/9} className='flex items-center justify-center'>
                <Image src={logo}
                     alt='chat' 
                     priority 
                     className='dark:filter dark:invert'
                     />

            </AspectRatio>
        </div>
        
    </Link>    
  )
}

export default Logo