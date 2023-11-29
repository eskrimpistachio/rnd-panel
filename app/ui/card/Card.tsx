import { MdMenu } from 'react-icons/md';

export default function Card({ jumlah, deskripsi, icon }: any) {
  return (
    <div className="bg-base-10 text-primary-30 w-[250px] h-[250px] rounded-2xl font-bold text-xl p-8 flex flex-col gap-8">
      <div className="flex flex-row justify-between text-2xl">
        {icon}
        <MdMenu />
      </div>
      <div className="text-2xl">{jumlah}</div>
      <div className="text-lg">{deskripsi}</div>
    </div>
  );
}
