export default function add() {
  return (
    <div className="flex flex-col  justify-center m-4 gap-8">
      <h1 className="font-bold text-2xl">Add Detail Data</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="name">Hasil Penelitian</label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-primary-20 rounded-lg border-white border-2 placeholder:text-white placeholder:text-sm py-2 px-6"
            placeholder="Hasil penelitian..."
          />
        </div>
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="name">Penyimpanan</label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-primary-20 rounded-lg border-white border-2 placeholder:text-white placeholder:text-sm py-2 px-6"
            placeholder="Penyimpanan..."
          />
        </div>
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="name">Penanggung Jawab</label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-primary-20 rounded-lg border-white border-2 placeholder:text-white placeholder:text-sm py-2 px-6"
            placeholder="Nama Penanggung Jawab..."
          />
        </div>
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="name">Kategori</label>
          <input
            type="text"
            id="name"
            name="name"
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
