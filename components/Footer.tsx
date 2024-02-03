'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className='flex items-center gap-10 py16'>
      <Link
        className='text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500'
        href='/about'
      >
        <span className='pr-2'>Made By</span>
        <Image src='logo-white.svg' width={20} height={20} alt='logo' />
        <span className='pl-1 font-medium text-slate-200'>jsn</span>
      </Link>
      <Link
        href='/github'
        className='flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500'
      >
        Source Code Here &nbsp;&#129109;
      </Link>
    </div>
  );
}

export default Footer;
