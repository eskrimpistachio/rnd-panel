import MenuLink from './menuLink/menuLink';
import { Unbounded } from 'next/font/google';
import { MdSpaceDashboard, MdDataUsage, MdLocalMall, MdDoorBack } from 'react-icons/md';

const unbound = Unbounded({ subsets: ['latin'] });

export default function Sidebar() {

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
          icon : <MdLocalMall/>,
        },
        {
          title: 'Logout',
          path: '/logout',
          icon : <MdDoorBack/>,
        },
      ],
    },
  ];

  return (
    <div>
      <ul className="bg-primary-20 rounded-xl py-10 pl-6 pr-10 h-[90vh]">
        {menuItems.map((m) => (
          <div className="flex flex-col gap-16">
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
      </ul>
    </div>
  );
}
