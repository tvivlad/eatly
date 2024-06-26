import { reducer, actions, PostNavState } from './PostNavSlice'
describe('pagination counter', () => {
  test('get next page', () => {
    const state: PostNavState = {
      currentPage: 1,
      totalPages: 3,
      limit: 10,
    }

    expect(reducer(state, actions.nextPage())).toEqual({
      currentPage: 2,
      totalPages: 3,
      limit: 10,
    })
  })

  test('get previous page', () => {
    const state: PostNavState = {
      currentPage: 3,
      totalPages: 3,
      limit: 10,
    }

    expect(reducer(state, actions.previousPage())).toEqual({
      currentPage: 2,
      totalPages: 3,
      limit: 10,
    })
  })

  test('get total pages count', () => {
    const state: PostNavState = {
      currentPage: 1,
      totalPages: 0,
      limit: 10,
    }

    expect(reducer(state, actions.setTotalPageNumber(35))).toEqual({
      currentPage: 1,
      totalPages: 4,
      limit: 10,
    })
  })
})
