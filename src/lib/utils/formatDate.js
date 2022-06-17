export const formatDate = (date) => {
  if (navigator.language === "fr-FR") {
    const elements = date.split("-");
    return `${elements[2]}/${elements[1]}/${elements[0]}`;
  }
};
