import { addDataManage } from "@/app/lib/actions";

export default function add() {
  return (
    <div className="flex flex-col  justify-center m-4 gap-8">
      <h1 className="font-bold text-2xl">Add Detail Data</h1>
      <form action={addDataManage} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="hasil">Hasil Penelitian</label>
          <input
            type="text"
            id="hasil"
            name="hasil"
            className="bg-primary-20 rounded-lg border-white border-2 placeholder:text-white placeholder:text-sm py-2 px-6"
            placeholder="Hasil penelitian..."
          />
        </div>
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="penyimpanan">Penyimpanan</label>
          <input
            type="text"
            id="penyimpanan"
            name="penyimpanan"
            className="bg-primary-20 rounded-lg border-white border-2 placeholder:text-white placeholder:text-sm py-2 px-6"
            placeholder="Penyimpanan..."
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
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="kategori">Kategori</label>
          <input
            type="text"
            id="kategori"
            name="kategori"
            className="bg-primary-20 rounded-lg border-white border-2 placeholder:text-white placeholder:text-sm py-2 px-6"
            placeholder="Kategori..."
          />
        </div>
        <button
          className="rounded-xl bg-white text-primary-30 py-2 px-8 mt-8 font-semibold text-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
