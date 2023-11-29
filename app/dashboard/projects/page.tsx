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
import { delProjects } from '@/app/lib/actions';
import { dataCard } from '@/app/lib/models';
import { MdOutlineCases, MdAccessTime, MdPeopleAlt } from 'react-icons/md';

export default async function Projects() {
  const data = await fetchProjects();
  const sumProjects = dataCard.projects;

  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-4xl">Project Overview</h1>
        <Link href="/dashboard/add/projects">
          <Button>Add Data</Button>
        </Link>
      </div>
      <div className="flex flex-row justify-between gap-4">
        <Card
          jumlah={sumProjects.totalProjects}
          deskripsi="Total Project"
          icon={<MdOutlineCases />}
        />
        <Card
          jumlah={sumProjects.sedangBerjalan}
          deskripsi="Sedang Berjalan"
          icon={<MdAccessTime />}
        />
        <Card
          jumlah={sumProjects.peneliti}
          deskripsi="Peneliti"
          icon={<MdPeopleAlt />}
        />
      </div>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th className="text-white">Project</Th>
              <Th className="text-white">Laboratorium</Th>
              <Th className="text-white">Penanggung Jawab</Th>
              <Th className="text-white">Status</Th>
              <Th className="text-white">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d) => (
              <Tr key={d.id}>
                <Td>{d.projectName}</Td>
                <Td>{d.laboratorium}</Td>
                <Td>{d.penanggungJawab}</Td>
                <Td>{d.status}</Td>
                <Td>
                  <form action={delProjects}>
                    <input type="hidden" name="id" value={d.id} />
                    <button className="hover:scale-110 rounded-xl bg-secondary-20 text-white py-2 px-4 font-semibold ">
                      Delete
                    </button>
                  </form>
                </Td>
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
