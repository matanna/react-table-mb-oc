export const currentPage = (elements, page, elementsPerPage) => {
  const values = [...elements].splice(
    (page - 1) * elementsPerPage,
    elementsPerPage
  );
  return values.length === 0 ? [...elements] : values;
};

export const prevPage = (elements, page, elementsPerPage) => {
  return [...elements].splice((page - 2) * elementsPerPage, elementsPerPage);
};

export const nextPage = (elements, page, elementsPerPage) => {
  return [...elements].splice(page * elementsPerPage, elementsPerPage);
};

export const items = (elements, page, elementsPerPage) => {
  return {
    first: elementsPerPage * (page - 1) + 1,
    last: elementsPerPage * page,
    total: elements.length,
  };
};
