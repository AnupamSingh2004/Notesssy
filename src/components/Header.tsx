import { shadow } from '@/styles/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import DarkModeToggle from './DarkModeToggle';
import LogoutButton from './LogoutButton';

function Header() {

  const user = 1;
  return (
    <header className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8'
      style={{
        boxShadow: shadow
      }}>

      <Link href={"/"} className='flex items-end gap-2'>
        <Image src={"/notesssy_log.png"} height={60} width={50} alt='logo' priority />
        <h1 className='flex flex-col text-2xl pb-6 font-semibold leading-0 items-center justify-center '>
          Notesssy
        </h1>
      </Link>

      <div className='flex gap-4'>
        {user ? (
          <LogoutButton />
        ) :
          (
            <>
              <Button asChild className='hidden sm:block'>
                <Link href={"/sign-up"}>Sign Up</Link>
              </Button>
              <Button asChild variant={'outline'}>
                <Link href={"/login"}>Login</Link>
              </Button>
            </>
          )}
        <DarkModeToggle />
      </div>
    </header>
  )
};

export default Header;
