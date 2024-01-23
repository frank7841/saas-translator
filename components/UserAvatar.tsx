import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Image from "next/image"


function UserAvatar({
    name,
    image,
    className
}:{
    name:string,
    image:string,
    className?:string
}) {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
        {image && (
            <Image 
                src={image}
                alt={name}
                className="rounded-full"
                height={40}
                width={40}
                />
        )}
        
        <AvatarFallback 
            delayMs={1000}
            className="dark:bg-white dark:text-black">
            {name ?.split(" ")
            .map((n)=>n[0])
            .join("")}
        </AvatarFallback>
    </Avatar>

  )
}

export default UserAvatar