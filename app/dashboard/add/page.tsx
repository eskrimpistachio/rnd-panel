import { addGeneralData } from '@/app/lib/actions';

export default function add() {
  return (
    <div className="flex flex-col  justify-center m-4 gap-8">
      <h1 className="font-bold text-2xl">Add General Data</h1>
      <form action={addGeneralData} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="activity">Activity Update</label>
          <input
            type="text"
            id="activity"
            name="activity"
            className="bg-primary-20 rounded-lg border-white border-2 placeholder:text-white placeholder:text-sm py-2 px-6"
            placeholder="Please enter your detail activity..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="dateTime">Date and Time</label>
          <input
            id="dateTime"
            name="dateTime"
            type="date"
            className="w-96 py-2 px-6 rounded-lg bg-primary-20 text-white border-white border-2"
          ></input>
        </div>
        <div className="flex flex-col gap-2 w-96">
          <label htmlFor="location">Enter Location</label>
          <input
            type="text"
            id="location"
            name="location"
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
