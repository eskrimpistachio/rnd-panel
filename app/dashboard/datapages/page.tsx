import Button from '@/app/ui/button/Button';
import Card from '@/app/ui/card/Card';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import Link from 'next/link';
import { fetchDataManage } from '@/app/lib/data';
import { delDataManage } from '@/app/lib/actions';
import { dataCard } from '@/app/lib/models';
import { MdContentPasteSearch, MdDiamond, MdOilBarrel } from 'react-icons/md';
// import { Chart } from '@/app/ui/chart/chart';

export default async function DataManagement() {
  const data = await fetchDataManage();
  const sumDataManage = dataCard.dataManage;

  return (
    <div className="m-4 flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-4xl">R&D Department Data</h1>
        <Link href="/dashboard/add/data">
          <Button>Add Data</Button>
        </Link>
      </div>
      <div className="flex flex-row gap-4">
        <Card
          jumlah={sumDataManage.hasilPenelitian}
          deskripsi="Hasil Penelitian"
          icon={<MdContentPasteSearch />}
        />
        <Card
          jumlah={sumDataManage.bahanMentah}
          deskripsi="Bahan Mentah"
          icon={<MdDiamond />}
        />
        <Card
          jumlah={sumDataManage.hasilOlahan}
          deskripsi="Hasil Olahan"
          icon={<MdOilBarrel />}
        />
      </div>
      {/* <Chart /> */}
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th className="text-white">Hasil Penelitian</Th>
              <Th className="text-white">Penyimpanan</Th>
              <Th className="text-white">Penanggung Jawab</Th>
              <Th className="text-white">Kategori</Th>
              <Th className="text-white">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d) => (
              <Tr key={d.id}>
                <Td>{d.hasil}</Td>
                <Td>{d.penyimpanan}</Td>
                <Td>{d.penanggungJawab}</Td>
                <Td>{d.kategori}</Td>
                <Td>
                  <form action={delDataManage}>
                    <input type="hidden" name="id" value={d.id} />
                    <button className="hover:scale-110 rounded-xl bg-secondary-20 text-white py-2 px-4 font-semibold ">
                      Delete
                    </button>
                  </form>
                </Td>
              </Tr>
            ))}

            {/* <Tr>
              <Td>Bio Solar</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Kategori</Td>
            </Tr>
            <Tr>
              <Td>Avtur</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Kategori</Td>
            </Tr>
            <Tr>
              <Td>Eco Diesel</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Kategori</Td>
            </Tr>
            <Tr>
              <Td>Petroleum</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Kategori</Td>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
