import { MdOutlineAdd } from 'react-icons/md';

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-row p-2 gap-2 bg-white rounded-lg font-bold text-primary-30'>
      <h1>{children}</h1>
      <MdOutlineAdd className ="text-xl font-bold"/>
    </div>
  );
}
