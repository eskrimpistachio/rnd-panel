import { auth, signOut } from '@/app/auth';
import MenuLink from './menuLink/menuLink';
import { Unbounded } from 'next/font/google';
import {
  MdSpaceDashboard,
  MdDataUsage,
  MdLocalMall,
  MdDoorBack,
} from 'react-icons/md';

const unbound = Unbounded({ subsets: ['latin'] });

export default async function Sidebar() {
  const session = await auth();

  const menuItems = [
    {
      title: 'R & D Panel',
      list: [
        {
          title: 'Dashboard',
          path: '/dashboard',
          icon: <MdSpaceDashboard />,
        },
        {
          title: 'Data Pages',
          path: '/dashboard/datapages',
          icon: <MdDataUsage />,
        },
        {
          title: 'Projects',
          path: '/dashboard/projects',
          icon: <MdLocalMall />,
        },
        // {
        //   title: 'Logout',
        //   path: '/logout',
        //   icon: <MdDoorBack />,
        // },
      ],
    },
  ];

  return (
    <div>
      <ul className="bg-primary-20 rounded-xl py-10 pl-6 pr-10 h-[90vh] flex flex-col gap-10">
        {menuItems.map((m) => (
          <div key={m.title} className="flex flex-col gap-16">
            <li className="text-xl font-bold px-4" key={m.title}>
              <h1 className={unbound.className}>{m.title}</h1>
            </li>
            <div className="flex flex-col gap-10">
              {m.list.map((item) => (
                <MenuLink items={item} key={item.title} />
              ))}
            </div>
          </div>
        ))}
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex flex-row gap-4 py-2 px-4 rounded-xl hover:bg-primary-30">
            <MdDoorBack className="text-2xl" />
            Logout
          </button>
        </form>
      </ul>
    </div>
  );
}
