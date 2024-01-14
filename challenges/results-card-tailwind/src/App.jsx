import "./App.css";

function App() {
  return (
    <>
      <main className="font-Hanken flex flex-col min-h-screen items-center justify-center">
        <div className="flex w-[630px] h-[430px] rounded-3xl bg-white">
          <aside className="flex flex-col px-11 bg-gradient-to-t from-slate-blue-dark to-slate-blue-light rounded-3xl justify-center items-center gap-8">
            <div className="text-lavender font-medium text-xl">
              Your results
            </div>

            <div className="gap-2 w-40 h-40 bg-gradient-to-b from-violet to-slate-blue-very-light p-4 text-white rounded-full flex-col flex justify-center items-center text-center">
              <span className="text-5xl font-bold">76</span>
              <span className="text-lavender text-md opacity-50">of 100</span>
            </div>
            <div className="text-white font-medium text-3xl">Great</div>
            <div className="mt-[-15px] opacity-80 text-lavender font-medium text-center text-sm">
              You scored higher than 65% of the people who have taken these
              tests.
            </div>
          </aside>

          {/* additional info of card */}

          <div className="py-8 px-8 flex flex-col justify-center items-left gap-7">
            <h1 className="font-semibold text-lg text-dark-gray">Summary</h1>

            <ul className="flex-col flex gap-4">
              <li className="rounded-md py-3 px-3 flex bg-red-light justify-between">
                <img src="./src/assets/icons/icon-reaction.svg" alt="" />
                <p className="text-red-default ml-[-30px]">Reaction</p>
                <p>
                  <span className="font-semibold">80</span>

                  <span className="text-gray-light"> / 100</span>
                </p>
              </li>

              <li className="rounded-md py-3 px-3 flex justify-between bg-orange-light">
                <img src="./src/assets/icons/icon-memory.svg" alt="" />
                <p className="text-orange-default ml-[-30px] ">Memory</p>
                <p>
                  92 <span className="text-gray-light"> / 100</span>
                </p>
              </li>

              <li className="rounded-md py-3 px-3 justify-between flex bg-green-light ">
                <img src="./src/assets/icons/icon-verbal.svg" alt="" />
                <p className="text-green-default justify-between ml-[-30px]">
                  Verbal
                </p>
                <p>
                  61 <span className="text-gray-light"> / 100</span>
                </p>
              </li>

              <li className="justify-between rounded-md py-3 px-3 flex bg-pale-blue">
                <img src="./src/assets/icons/icon-visual.svg" alt="" />
                <p className="text-blue ml-[-30px]">Visual</p>
                <p>
                  72 <span className="text-gray-light"> / 100</span>
                </p>
              </li>
            </ul>

            <button className="bg-gray-dark-gray text-pale-blue px-5 py-3 text-center w-[250px] rounded-3xl text-md">
              Continue
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
