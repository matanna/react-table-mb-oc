/**
 * We sort the data based on the type of the column we want to sort
 * @param e - the event object
 * @param initialArray - the array of data we want to sort
 * @param columns - the columns array that we created in the previous step
 * @returns a sorted array.
 */
export const sortData = (e, initialArray, columns) => {
  // Get the type of the column we want to sort
  const type =
    columns[
      columns.map((e) => e.data).indexOf(e.target.parentNode.dataset.name)
    ].typeData;

  // we sort differently for each type in terms of the direction chose (desc or asc)
  switch (type) {
    case "string":
      return [...initialArray].sort((a, b) => {
        if (e.target.dataset.sort === "desc") {
          return a[e.target.parentNode.dataset.name].localeCompare(
            b[e.target.parentNode.dataset.name]
          );
        }
        if (e.target.dataset.sort === "asc") {
          return b[e.target.parentNode.dataset.name].localeCompare(
            a[e.target.parentNode.dataset.name]
          );
        }
      });
    case "number":
      return [...initialArray].sort((a, b) => {
        if (e.target.dataset.sort === "desc") {
          return (
            a[e.target.parentNode.dataset.name] -
            b[e.target.parentNode.dataset.name]
          );
        }
        if (e.target.dataset.sort === "asc") {
          return (
            b[e.target.parentNode.dataset.name] -
            a[e.target.parentNode.dataset.name]
          );
        }
      });
    case "date":
      return [...initialArray].sort((a, b) => {
        if (e.target.dataset.sort === "desc") {
          return (
            Date.parse(a[e.target.parentNode.dataset.name]) -
            Date.parse(b[e.target.parentNode.dataset.name])
          );
        }
        if (e.target.dataset.sort === "asc") {
          return (
            Date.parse(b[e.target.parentNode.dataset.name]) -
            Date.parse(a[e.target.parentNode.dataset.name])
          );
        }
      });
    default:
      return;
  }
};
