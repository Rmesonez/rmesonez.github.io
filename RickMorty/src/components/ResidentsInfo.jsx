import './ResidentsInfo.css'
import Characters from "./Characters";
import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"

const ResidentsInfo = ({ data }) => {

  const [ currentItems, setCurrentItems ] = useState([])
  const [ pageCount, setPageCount ] = useState(0)
  const [ itemOffset, setItemOffset ] = useState(0)
  const [loading, setLoading] = useState(true)

  const itemsPerPage = 4;

  useEffect(() => {
    setLoading(true)
      const endOffset = itemOffset + itemsPerPage
      setCurrentItems(data?.residents?.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(data?.residents?.length / itemsPerPage))
      setLoading(false)
  }, [data, itemOffset, itemsPerPage])

  const handlePageClick = (e) => {
      const newOffset = (e.selected * itemsPerPage) % data?.residents?.length
      setItemOffset(newOffset)
  }


  return (
    <>
    <div className='card'>
      {
        currentItems?.map((resident) => {
          return (
            <Characters key={ resident } resident={ resident } />
          )
        })
      }

  <ReactPaginate
        breakLabel={ "..." }
        breakClassName={ "break-me" }
        containerClassName={ "pagination" }
        nextLabel={ "Next >" }
        previousLabel={ "< Previous" }
        pageCount={ pageCount }
        renderOnZeroPageCount={ false }
        onPageChange={ handlePageClick }
        pageRangeDisplayed={ 5 }
        marginPagesDisplayed={ 2 }
        activeClassName={ "active" }
        pageLinkClassName={ "page-link" }

      />
      
    </div>


    </>
  )
}

export default ResidentsInfo
