import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: 'Petroleum',
    Jumlah_Mining: 4000,
    Berhasil_Di_Olah: 2400,
    Terjual: 2400,
  },
  {
    name: 'Minyak',
    Jumlah_Mining: 3000,
    Berhasil_Di_Olah: 2600,
    Terjual: 1500,
  },
  {
    name: 'Emas',
    Jumlah_Mining: 6000,
    Berhasil_Di_Olah: 5600,
    Terjual: 4500,
  },
  {
    name: 'Copper',
    Jumlah_Mining: 4000,
    Berhasil_Di_Olah: 2400,
    Terjual: 2400,
  },
];

const Chart = () => {
  return (
    <div className="bg-white rounded-xl py-4 px-4 flex flex-col gap-6">
      <h1 className="text-primary-30 font-bold text-xl">Reports</h1>
      <AreaChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        className='font-bold'
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Jumlah_Mining"
          stackId="1"
          stroke="#E84C3D"
          fill="#E84C3D"
        />
        <Area
          type="monotone"
          dataKey="Berhasil_Di_Olah"
          stackId="1"
          stroke="#00FFAB"
          fill="#00FFAB"
        />
        <Area
          type="monotone"
          dataKey="Terjual"
          stackId="1"
          stroke="#FFBC05"
          fill="#FFBC05"
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
