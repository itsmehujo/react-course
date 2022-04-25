import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className='bg-black pt-1'>
      <div className="container mx-auto px-6">
        <div className="mt-5 flex flex-col items-center">
          <p className="mb-6 text-sm text-white font-bold">
            © {new Date().getFullYear()} itsmehujo
          </p>
        </div>
      </div>

    </footer>
  )
};

export default Footer;