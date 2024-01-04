import tw, { styled } from 'twin.macro'
import {
  NavigateBeforeIcon,
  NavigateNextIcon,
  KeyboardDoubleArrowLeftIcon,
  KeyboardDoubleArrowRightIcon,
} from '@/components/atoms/Icon'

type PaginationProps = {
  page: number
  totalPage: number
  limit?: number
  onChange: () => void
}

const range = (start: number, end: number) => {
  const isReverse = start > end
  const targetLength = isReverse ? start - end + 1 : end - start + 1
  const array = new Array(targetLength)
  const b = Array.apply(null, array)
  const result = b.map((discard, n) => {
    return isReverse ? n + end : n + start
  })
  return isReverse ? result.reverse() : result
}

const Pagination = ({ page, totalPage, limit = 10 }: PaginationProps) => {
  const pageGroup = Math.ceil(page / limit)
  let lastPage = pageGroup * limit
  if (lastPage > totalPage) lastPage = totalPage
  const firstPage = lastPage - (limit - 1) <= 0 ? 1 : lastPage - (limit - 1)
  const pageNumberArray = range(firstPage, lastPage)

  const handleFirstPageClick = () => {}

  const handleEndPageClick = () => {}

  const handleNextPageClick = () => {}

  const handlePrevPageClick = () => {}

  return (
    <div tw="w-[320px] flex justify-between mb-12 m-0">
      <KeyboardDoubleArrowLeftIcon onClick={handleFirstPageClick} />
      <NavigateBeforeIcon onClick={handlePrevPageClick} />
      {pageNumberArray.map((num) => (
        <div key={num}>{num}</div>
      ))}
      <NavigateNextIcon onClick={handleNextPageClick} />
      <KeyboardDoubleArrowRightIcon onClick={handleEndPageClick} />
    </div>
  )
}

export default Pagination
