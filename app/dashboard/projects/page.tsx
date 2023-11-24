import Card from '@/app/ui/card/Card';
import Image from 'next/image';
import { MdOutlineHelp } from 'react-icons/md';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import DetailButton from '@/app/ui/button/DetailButton';

export default function Projects() {
  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-4xl">Project Overview</h1>
        <div className="flex flex-row p-2 gap-4">
          <MdOutlineHelp className="text-xl" />
          <h1>Help and Support</h1>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-4">
        <Card />
        <Card />
        <Card />
      </div>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th className="text-white">Project</Th>
              <Th className="text-white">Laboratorium</Th>
              <Th className="text-white">Penanggung Jawab</Th>
              <Th className="text-white">Status</Th>
              <Th className="text-white">Detail</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Tambang Kota Manokwari</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Selesai</Td>
              <Td>
                <DetailButton>Klik Disini</DetailButton>
              </Td>
            </Tr>
            <Tr>
              <Td>Tambang Kota Manokwari</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Selesai</Td>
              <Td>
                <DetailButton>Klik Disini</DetailButton>
              </Td>
            </Tr>
            <Tr>
              <Td>Tambang Kota Manokwari</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Selesai</Td>
              <Td>
                <DetailButton>Klik Disini</DetailButton>
              </Td>
            </Tr>
            <Tr>
              <Td>Tambang Kota Manokwari</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Selesai</Td>
              <Td>
                <DetailButton>Klik Disini</DetailButton>
              </Td>
            </Tr>
            <Tr>
              <Td>Tambang Kota Manokwari</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Selesai</Td>
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
