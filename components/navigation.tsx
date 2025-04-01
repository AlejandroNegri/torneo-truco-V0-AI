"use client"

import Link from "next/link"
import { Trophy, Clock } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-lg">
      <nav className="container mx-auto flex items-center justify-around">
        <Link
          href="/"
          className={cn(
            "flex flex-col items-center py-3 px-5 text-sm",
            pathname === "/" ? "text-primary font-medium" : "text-muted-foreground",
          )}
        >
          <Trophy className="h-6 w-6 mb-1" />
          <span>Posiciones</span>
        </Link>

        <Link
          href="/historial"
          className={cn(
            "flex flex-col items-center py-3 px-5 text-sm",
            pathname === "/historial" ? "text-primary font-medium" : "text-muted-foreground",
          )}
        >
          <Clock className="h-6 w-6 mb-1" />
          <span>Estadísticas</span>
        </Link>
      </nav>
    </div>
  )
}

