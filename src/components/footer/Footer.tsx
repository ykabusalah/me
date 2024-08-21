import React from 'react';
import Link from 'next/link';
import { FaPencilAlt } from 'react-icons/fa'; // Assuming you're using react-icons

interface FooterProps {
  currentYear: number;
  email: string;
  artistName: string;
  artPageLink: string;
}

const Footer: React.FC<FooterProps> = ({ currentYear, email, artistName, artPageLink }) => {
  return (
    <footer className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>{currentYear} © Clark Hass</div>
          <div className="flex items-center space-x-4">
            <span>{email}</span>
          </div>
            <div>
            <span>
              Art By {artistName}
              <Link href={artPageLink} className="pr-2 ml-2 inline-flex items-center text-black hover:text-gray-800">
                <FaPencilAlt className=" h-4 w-4" />
              </Link>
            </span>

            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;