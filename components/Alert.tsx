'use client'
import { Terminal, Waves } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import useCartStore from "@/lib/Store";
import React from 'react'

export default function AlertComp() {
  const added = useCartStore(state=>state.added);



  return (
    <div className="fixed w-1/2 left-6 top-12 z-50">
    {added && (
      <Alert  variant={"default"} className=" border-green-500">
        <Terminal className="h-4 w-4" />
        <AlertDescription  className="font-bold text-green-500">
          Added to Cart!
        </AlertDescription>
      </Alert>
    )}
    </div>
  )
}
