import { MdAddTask,  MdMenu } from 'react-icons/md';

export default function Card() {
  return (
    <div className="bg-base-10 text-primary-30 w-[250px] h-[250px] rounded-2xl font-bold text-xl p-8 flex flex-col gap-8">
      <div className="flex flex-row justify-between text-2xl">
        <MdAddTask />
        <MdMenu />
      </div>
      <div className="text-2xl">7</div>
      <div className="text-lg">Proyek yang sedang di kerjakan</div>
    </div>
  );
}
