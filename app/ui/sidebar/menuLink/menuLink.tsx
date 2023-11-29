'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type T = {
  items: items;
};

export type items = {
  path: string;
  title: string;
  icon: React.ReactNode;
};

export default function menuLink({ items }: T) {
  const pathname = usePathname();

  return (
    <Link
      className={`${
        pathname === items.path
          ? 'bg-primary-30 flex flex-row gap-4 py-2 px-4 rounded-xl'
          : 'flex flex-row gap-4 hover:bg-primary-30 py-2 px-4 rounded-xl'
      }`}
      href={items.path}
    >
      <div className="text-2xl">{items.icon}</div>
      <h1>{items.title}</h1>
    </Link>
  );
}
