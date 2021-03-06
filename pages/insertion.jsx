import { useState } from "react";

const Insertion = () => {
  const [c] = useState([
    {
      52: "bg-slate-600 w-10 h-52",
    },
    {
      20: "bg-slate-600 w-10 h-20",
    },
    {
      40: "bg-slate-600 w-10 h-40",
    },
    {
      80: "bg-slate-600 w-10 h-80",
    },
    {
      32: "bg-slate-600 w-10 h-32",
    },
    {
      36: "bg-slate-600 w-10 h-36",
    },
    {
      24: "bg-slate-600 w-10 h-24",
    },
    {
      64: "bg-slate-600 w-10 h-64",
    },
    {
      44: "bg-slate-600 w-10 h-44",
    },
    {
      28: "bg-slate-600 w-10 h-28",
    },
    {
      72: "bg-slate-600 w-10 h-72",
    },
    {
      60: "bg-slate-600 w-10 h-60",
    },
  ]);

  // TODO: this state is used to copy the main array and show on UI
  const [a, setA] = useState([c]);

  // * The time varible is used to get time from user and used as speed to show the sort action
  let time = 2000;

  for (let i = 1; i < c.length; i++) {
    setTimeout(() => {
      for (let j = i - 1; j >= 0; j--) {
        setTimeout(() => {
          if (+Object.keys(c[j + 1]) < +Object.keys(c[j])) {
            let temp = c[j + 1];
            c[j + 1] = c[j];
            c[j] = temp;
            temp[Object.keys(temp)] = `bg-lime-600 border w-10 h-${Object.keys(
              temp
            )}`;
            setA([...c]);
            temp[Object.keys(temp)] = `bg-slate-600 w-10 h-${Object.keys(
              temp
            )}`;
          }
        }, (j * time) / i);
      }
    }, i * time);
  }

  return (
    <section>
      <h3 className="font-bold text-xl">Insertion Sort</h3>
      <p className="indent-8 font-medium my-3">
        Insertion sort is the most popular sort in programming and it's a simple
        sorting algorithm that works similar to the way you sort playing cards
        in your hands. The array is virtually split into a sorted and an
        unsorted part. Values from the unsorted part are picked and placed at
        the correct position in the sorted part.
      </p>
      <div className="flex gap-2 items-end bg-slate-300 p-10 rounded-md">
        {a.map((e) => (
          <span key={Object.keys(e)} className={Object.values(e)}></span>
        ))}
      </div>
    </section>
  );
};

export default Insertion;
