/**
 * It sorts the data based on the type of data in the column
 * @param e - the event object
 * @param elements - the array of objects that we want to sort
 * @param columns - an array of objects that contain the data for each column.
 * @returns a sorted array of objects.
 */
export const sortData = (e, elements, columns) => {
  // Get the type of the column we want to sort
  const type =
    columns[
      columns.map((e) => e.data).indexOf(e.target.parentNode.dataset.name)
    ].typeData;

  // we sort differently for each type in terms of the direction chose (desc or asc)
  switch (type) {
    case "string":
      return [...elements].sort((a, b) => {
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
      return [...elements].sort((a, b) => {
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
      return [...elements].sort((a, b) => {
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
