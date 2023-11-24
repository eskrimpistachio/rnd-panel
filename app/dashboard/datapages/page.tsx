import Button from '@/app/ui/button/Button';
import DetailButton from '@/app/ui/button/DetailButton';
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

export default function DataManagement() {
  return (
    <div className="m-4 flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-4xl">R&D Department Data</h1>
        <Button>Add Data</Button>
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
              <Th className="text-white">Detail</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Petroleum</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Kategori</Td>
              <Td>
                <DetailButton>Klik Disini</DetailButton>
              </Td>
            </Tr>
            <Tr>
              <Td>Bio Solar</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Kategori</Td>
              <Td>
                <DetailButton>Klik Disini</DetailButton>
              </Td>
            </Tr>
            <Tr>
              <Td>Avtur</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Kategori</Td>
              <Td>
                <DetailButton>Klik Disini</DetailButton>
              </Td>
            </Tr>
            <Tr>
              <Td>Diesel</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Kategori</Td>
              <Td>
                <DetailButton>Klik Disini</DetailButton>
              </Td>
            </Tr>
            <Tr>
              <Td>Petroleum</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Kategori</Td>
              <Td>
                <DetailButton>Klik Disini</DetailButton>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
