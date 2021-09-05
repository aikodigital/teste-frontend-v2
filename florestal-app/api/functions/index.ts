class ApiFunctions {
  paginate (array: any, pageSize: number, pageNumber: number) {
    const totalPages = Math.ceil(array.length / pageSize)
    const totalData = array.length
    pageNumber = (pageNumber > totalPages) ? totalPages : pageNumber
    return {
      page: pageNumber,
      totalData,
      data: array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
    }
  }
}
export default new ApiFunctions()
