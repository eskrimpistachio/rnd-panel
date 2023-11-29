import { addProjects } from '@/app/lib/actions';

export default function add() {
  return (
    <div className="flex flex-col  justify-center m-4 gap-8">
      <h1 className="font-bold text-2xl">Add Projects</h1>
      <form action={addProjects} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="projectName">Projects Name</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            className="bg-primary-20 rounded-lg border-white border-2 placeholder:text-white placeholder:text-sm py-2 px-6"
            placeholder="Please enter name of the projects..."
          />
        </div>
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="laboratorium">Laboratorium</label>
          <input
            type="text"
            id="laboratorium"
            name="laboratorium"
            className="bg-primary-20 rounded-lg border-white border-2 placeholder:text-white placeholder:text-sm py-2 px-6"
            placeholder="Please enter laboratorium code..."
          />
        </div>
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="penanggungJawab">Penanggung Jawab</label>
          <input
            type="text"
            id="penanggungJawab"
            name="penanggungJawab"
            className="bg-primary-20 rounded-lg border-white border-2 placeholder:text-white placeholder:text-sm py-2 px-6"
            placeholder="Nama Penanggung Jawab..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            className="py-2 px-6 rounded-lg bg-primary-20 text-white border-white border-2"
          >
            <option value="Selesai">Selesai</option>
            <option value="Sedang Dikerjakan">Sedang Dikerjakan</option>
            <option value="Menunggu">Menunggu</option>
          </select>
        </div>
        <button
          className="hover:scale-110 rounded-xl bg-white text-primary-30 py-2 px-8 mt-8 font-semibold text-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
