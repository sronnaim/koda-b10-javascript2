const we = {
  are: {
    the: {
      best: "Koda",
    },
  },
};

console.log(we.are.the.best);

const hello = {
  world: "Hello World",
};

console.log(hello.world);

const obj = {
  str: [
    null,
    null,
    null,
    [
      null,
      [
        null,
        null,
        {
          man: [
            {
              tech: {
                academy: "Tech Academy",
              },
            },
          ],
        },
      ],
    ],
  ],
};

console.log(obj.str[3][1][2].man[0].tech.academy);

const my = [
  { favourite: [
    null,
    null,
    null,
    {
      fruit: {
        is: "Apple",
      },
    },
  ] },
];

console.log(my[0].favourite[3].fruit.is);

const num = {
  first: [
    null,
    31,
  ],
  second: [
    null,
    null,
    1,
  ],
};

console.log(num.first[1] + num.second[2]);
