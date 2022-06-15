export const searchData = (elements, search) => {
  // Transform all objects in array of values
  const values = elements.map((e) =>
    Object.keys(e)
      .map((key) => e[key])
      .join(" ")
  );
  //Create regex for search
  const regex = new RegExp(search);

  // Filter values by regex
  return values
    .reduce((acc, e, i) => {
      return e.search(regex) === -1 ? acc : [...acc, i];
    }, [])
    .map((e) => elements[e]);
};
