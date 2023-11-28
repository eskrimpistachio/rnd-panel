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
import Button from '@/app/ui/button/Button';
import Link from 'next/link';
import { fetchProjects } from '@/app/lib/data';

export default async function Projects() {
  const data = await fetchProjects();

  // console.log(data);
  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-4xl">Project Overview</h1>
        <Link href="/dashboard/add/projects">
          <Button>Add Data</Button>
        </Link>
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
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d) => (
              <Tr key={d.id}>
                <Td>{d.projectName}</Td>
                <Td>{d.laboratorium}</Td>
                <Td>{d.penanggungJawab}</Td>
                <Td>{d.status}</Td>
              </Tr>
            ))}
            {/* 
            <Tr>
              <Td>Tambang Kota Manokwari</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Selesai</Td>
            </Tr>
            <Tr>
              <Td>Tambang Kota Manokwari</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Selesai</Td>
            </Tr>
            <Tr>
              <Td>Tambang Kota Manokwari</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Selesai</Td>
            </Tr>
            <Tr>
              <Td>Tambang Kota Manokwari</Td>
              <Td>A001</Td>
              <Td>Muhammad Ridha</Td>
              <Td>Selesai</Td>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
