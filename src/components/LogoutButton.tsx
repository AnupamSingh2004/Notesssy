"use client";


import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from "sonner"
function LogoutButton() {

  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const errorMessage = null;

    if (!errorMessage) {

      toast("Logged Out", {
        description: "Logged Out Successfully"
      })
    }


    setLoading(false);


    console.log("Loggin Out");
  }
  return (
    <>

      <Button className='w-24'
        variant={'outline'}
        onClick={handleLogOut}
        disabled={loading}
      >{loading ? <Loader2 className='animate-spin' /> : "Log Out"}</Button>
    </>
  )
};

export default LogoutButton;
