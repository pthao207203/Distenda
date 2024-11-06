module.exports = (objectPagination, query, countCourses) => {
  if (query.page){
    objectPagination.currentPage = parseInt(query.page);
  }
  objectPagination.skip = (objectPagination.currentPage - 1)*objectPagination.limitItems;
  const totalPage = Math.ceil(countCourses/objectPagination.limitItems);
  objectPagination.totalPage = totalPage;
  
  return objectPagination;
}