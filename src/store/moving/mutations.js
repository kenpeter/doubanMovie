/**
 * @author monkeywang
 * Date: 17/3/15
 */
// ./types has many direct exports
// * as types, so can do types.xxxxxx
import * as types from './types'
// export const... mutations
export const mutations = {
  // basically [types.MOVING_TITLE] is a function name
  // state and payload
  // changing part of state.
  // {title} is shorthand {title: title}
  [types.MOVING_TITLE] (state, {title}) {
    // title sitting inside object
    // get title away.
    state.title = title
  },
  [types.MOVING_LIST] (state, {list}) {
    // set movie list
    state.movingList = list
  },
  [types.MOVING_LOADING] (state, {loading}) {
    // movie is loading
    state.loadingMoving = loading
  },
  [types.PAGE_LOAD] (state, {pageload}) {
    // page is loaded????????????
    state.pageload = pageload
  },
  [types.UP_COMBODY] (state, {upcomBody}) {
    // upcoming body text?
    state.upcomBody = upcomBody
  },
  [types.MOVIE_CITY] (state, {city}) {
    // movie city
    // why set loading movie true.....
    // takes a while after switching city
    state.city = city
    state.loadingMoving = true
  },
  [types.UP_COMING] (state, {loading}) {
    // upcoming is loading.
    state.loadingUpComing = loading
  },
  [types.LOAD_TOP250] (state, {ranking250}) {
    // top 250
    state.ranking250 = ranking250
  },
  [types.PAGE_START] (state, {start}) {
    // page start, what page.....???????
    state.start = start
  },
  [types.SEARCH_TEXT] (state, {searchText}) {
    // the text in the search box
    state.searchText = searchText
  },
  [types.SEARCH_LIST] (state, {searchList}) {
    // a list of result
    state.searchList = searchList
  },
  [types.SEARCH_LOADING] (state, {loading}) {
    // is searching
    state.searchLoading = loading
  },
  [types.MOVING_ID] (state, {id}) {
    // movid id .....
    state.id = id
  },
  [types.MOVING_DETAIL] (state, {movieDetail}) {
    // movie detail ....
    state.movieDetail = movieDetail
  },
  [types.DETAIL_LOADING] (state, {loading}) {
    // individual movie is loading....
    state.loadingDetail = loading
  },
  [types.MOVIE_COMMENT] (state, {comment}) {
    // there is commment
    state.movieComment = comment
  }
}
