import Image from 'next/image';
import Link from 'next/link';

export type T = {
  items: items;
};

export type items = {
  path: string;
  title: string;
};

export default function menuLink({ items }: T) {
  return <Link href={items.path}>{items.title}</Link>;
}
