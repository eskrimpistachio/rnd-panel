export default function DetailButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row py-2 bg-white rounded-lg font-bold text-primary-30">
      <h1 className='mx-auto'>{children}</h1>
    </div>
  );
}
