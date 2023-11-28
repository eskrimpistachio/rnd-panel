import Card from '../ui/card/Card';
import { MdOutlineSearch, MdOutlineHelp } from 'react-icons/md';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import Button from '../ui/button/Button';
import Link from 'next/link';
import { fetchGeneral } from '../lib/data';
import { delGeneralData } from '../lib/actions';

export default async function Dashboard() {
  const genData = await fetchGeneral();

  return (
    <div className="m-4 flex flex-col gap-8">
      <div className="flex flex-row justify-around gap-16">
        <div className="flex flex-row gap-4 p-2 rounded-lg bg-transparent border border-white w-[50vw]">
          <MdOutlineSearch className="text-xl" />
          <input
            type="search"
            className="bg-transparent text-sm w-[50vw] active:border-[0px] active:border-transparent"
            placeholder="Search your projects"
          />
        </div>
        <div className="flex flex-row p-2 gap-4">
          <MdOutlineHelp className="text-xl" />
          <h1>Help and Support</h1>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-4xl">Hello, R&D Department!</h1>
        <Link href="/dashboard/add">
          <Button>Add Data</Button>
        </Link>
      </div>
      <div className="flex flex-row justify-between">
        <Card />
        <Card />
        <Card />
      </div>
      <h1 className="font-bold text-2xl">Recent Activity</h1>
      <TableContainer id="table">
        <Table size="md">
          <Thead>
            <Tr>
              <Th className="text-white">Date and Time</Th>
              <Th className="text-white">Activity Update</Th>
              <Th className="text-white">Location</Th>
              <Th className="text-white">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {genData.map((d) => (
              <Tr key={d.id}>
                <Td>{d.dateTime}</Td>
                <Td>{d.activity}</Td>
                <Td>{d.location}</Td>
                <Td>
                  <form action={delGeneralData}>
                    <input type="hidden" name="id" value={d.id} />
                    <button className="rounded-xl bg-secondary-20 text-white py-2 px-4 font-semibold ">
                      Delete
                    </button>
                  </form>
                </Td>
              </Tr>
            ))}
          </Tbody>

          {/* <Tr>
              <Td>31 October 2023, 14.00</Td>
              <Td>Menambahkan Project x di Kota ABC</Td>
              <Td>Bima, Indonesia</Td>
            </Tr>
            <Tr>
              <Td>31 October 2023, 14.00</Td>
              <Td>Menyelesaikan Project AB di Kota Z</Td>
              <Td>New Delhi, India</Td>
            </Tr> */}
        </Table>
      </TableContainer>
    </div>
  );
}
