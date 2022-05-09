import { useState, useEffect } from "react";

const Insertion = () => {
  const [c] = useState([
    {
      96: "bg-slate-600 w-10 h-96",
    },
    {
      80: "bg-slate-600 w-10 h-80",
    },
    {
      52: "bg-slate-600 w-10 h-52",
    },
    {
      40: "bg-slate-600 w-10 h-40",
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
      72: "bg-slate-600 w-10 h-72",
    },
    {
      60: "bg-slate-600 w-10 h-60",
    },
  ]);

  const [a, setA] = useState(c);

  for (let i = 1; i < c.length; i++) {
    setTimeout(() => {
      let cc = [...c];
      for (let j = 0; j <= i; j++) {
        setTimeout(() => {
          if (+Object.keys(c[i]) < +Object.keys(c[j])) {
            let temp = c[i];
            c[i] = c[j];
            c[j] = temp;
            temp[Object.keys(temp)] = `bg-red-600 w-10 h-${Object.keys(temp)}`;
            cc = [...c];
            setA(cc);
            temp[Object.keys(temp)] = `bg-slate-600 w-10 h-${Object.keys(
              temp
            )}`;
          }
        }, (j * 3000) / i);
      }
    }, i * 3000);
  }

  return (
    <section>
      <h3 className="font-bold text-xl">Insertion Sort</h3>
      <span className="font-medium">
        Insertion sort is the most popular sort in programming and it's a simple
        sorting algorithm that works similar to the way you sort playing cards
        in your hands. The array is virtually split into a sorted and an
        unsorted part. Values from the unsorted part are picked and placed at
        the correct position in the sorted part.
      </span>
      <div
        key={12}
        className="flex gap-2 items-end bg-slate-300 p-10 rounded-md"
      >
        {a.map((e) => (
          <span key={Object.keys(e)} className={Object.values(e)}>
            {Object.keys(e)}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Insertion;
