import { fetchGeneral } from '../../lib/data';

export default async function add() {
  const generalData = await fetchGeneral();

  console.log(generalData);

  return (
    <div className="flex flex-col  justify-center m-4 gap-8">
      <h1 className="font-bold text-2xl">Add General Data</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="name">Activity Update</label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-primary-20 rounded-lg border-white border-2 placeholder:text-white placeholder:text-sm py-2 px-6"
            placeholder="Please enter your detail activity..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="pickupdate">Date and Time</label>
          <input
            id="pickupdate"
            name="pickupdate"
            type="date"
            className="w-96 py-2 px-6 rounded-lg bg-primary-20 text-white border-white border-2"
          ></input>
        </div>
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="name">Enter Location</label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-primary-20 rounded-lg border-white border-2 placeholder:text-white placeholder:text-sm py-2 px-6"
            placeholder="Example : Malang, Indonesia"
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
