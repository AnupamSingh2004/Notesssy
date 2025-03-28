"use client";


import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from "sonner"
import { logOutAction } from '@/actions/users';
function LogoutButton() {

  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);

    const { errorMessage } = await logOutAction();
    if (!errorMessage) {

      toast("Logged Out", {
        description: "Logged Out Successfully"
      })
    } else {
      toast("Error", {
        description: errorMessage
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
