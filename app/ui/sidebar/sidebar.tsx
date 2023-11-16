import MenuLink from './menuLink/menuLink';
import { Unbounded } from 'next/font/google';

const unbound = Unbounded({ subsets: ['latin'] });

export default function Sidebar() {
  const menuItems = [
    {
      title: 'R & D Panel',
      list: [
        {
          title: 'Dashboard',
          path: '/dashboard',
          // icon : <MdDashboard/>,
        },
        {
          title: 'Data Pages',
          path: '/dashboard/datapages',
          // icon : <MdDataPages/>,
        },
        {
          title: 'Projects',
          path: '/dashboard/projects',
          // icon : <MdProjects/>,
        },
        {
          title: 'Profile',
          path: '/dashboard/profile',
          // icon : <MdProfile/>,
        },
      ],
    },
  ];

  return (
    <div>
      <ul className="bg-primary-20 rounded-xl py-10 px-10 h-[90vh]">
        {menuItems.map((m) => (
          <div className="flex flex-col gap-10">
            <li className="text-xl font-bold" key={m.title}>
              <h1 className={unbound.className}>{m.title}</h1>
            </li>
            <div className="flex flex-col gap-8">
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
