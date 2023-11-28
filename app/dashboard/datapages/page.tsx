import Button from '@/app/ui/button/Button';
import Card from '@/app/ui/card/Card';
import Chart from '@/app/ui/chart/chart';
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

export default async function DataManagement() {
  const data = await fetchDataManage();

  // console.log(data);

  return (
    <div className="m-4 flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-4xl">R&D Department Data</h1>
        <Link href="/dashboard/add/data">
          <Button>Add Data</Button>
        </Link>
      </div>
      <div className="flex flex-row gap-4">
        <Card />
        <Card />
        <Card />
      </div>
      <Chart />
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th className="text-white">Hasil Penelitian</Th>
              <Th className="text-white">Penyimpanan</Th>
              <Th className="text-white">Penanggung Jawab</Th>
              <Th className="text-white">Kategori</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d) => (
              <Tr key={d.id}>
                <Td>{d.hasil}</Td>
                <Td>{d.penyimpanan}</Td>
                <Td>{d.penanggungJawab}</Td>
                <Td>{d.kategori}</Td>
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
