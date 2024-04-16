"use client"

import Link from "next/link"
import {
  Home,
  LineChart,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { usePathname } from "next/navigation";

import  Person  from '@radix-ui/react-icons';

export default function NavAy() {

const currentRoute = usePathname();



return (

    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
    <Link
      href="/"
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${currentRoute === '/' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}
    >
      <Home className="h-4 w-4" />
      Dashboard
    </Link>
    <Link
      href="#"
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      <ShoppingCart className="h-4 w-4" />
      Orders
      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
        6
      </Badge>
    </Link>
    <Link
      href="/products"
      
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${currentRoute === '/products' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}
    >
      <Package className="h-4 w-4" />
      Products{" "}
    </Link>
    <Link
      href="/customers"
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${currentRoute === '/customers' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}
    >
      <Users className="h-4 w-4" />
      Customers
    </Link>
    <Link
      href="#"
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${currentRoute === '/analytics' ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}`}
    >
      <LineChart className="h-4 w-4" />
      Analytics
    </Link>
  </nav>

 )
}
