const arr1 = [
    {id: 3, date: new Date(2022, 1, 24)},
    {id: 5, date: new Date(2027, 1, 24)},
    {id: 2, date: new Date(2023, 1, 24)},
  ];
  
  // ✅ Sort in Ascending order (low to high)
  const sortedAsc = arr1.sort(
    (objA, objB) => Number(objA.date) - Number(objB.date),
  );
  
  // 👇️ {id: 3, date: Thu Feb 24 2022,
  //     id: 2, date: Fri Feb 24 2023
  //     id: 5, date: Wed Feb 24 2027}
  console.log(sortedAsc);
  