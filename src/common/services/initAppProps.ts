import { bindActionCreators } from 'redux';
import { initialize } from 'redux-form';
import * as postsActions from '@store/actionCreators/postsActions';
import * as authActions from '@store/actionCreators/authActions';
import * as pageActions from '@store/actionCreators/pageActions';
import * as messageActions from '@store/actionCreators/messageActions';
import * as filterActions from '@store/actionCreators/filterActions';
import { Post } from '@common/types';
import { SHOW_ALL, SHOW_NEW, SHOW_VIEWED } from '@common/types/states';

const getPostForPage = (posts: Post[], iPerPage: number, page: number, filter: string) => {
  const from = page * iPerPage;
  const to = from + iPerPage; 

  return getVisiblePosts(posts, filter).slice(from, to);
}
 
const pageCountCalc = (posts: Post[], iPerPage: number, filter: string) => {
  return getVisiblePosts(posts, filter)?.length/iPerPage;
}

const getVisiblePosts = (posts: Post[], filter: any) => {
  switch (filter) {
    case SHOW_ALL: return posts
    case SHOW_NEW: return posts.filter(t => t.isNew)
    case SHOW_VIEWED: return posts.filter(t => !t.isNew)
    default: throw new Error('Unknown filter: ' + filter)
  }
}
  
export const mapStateToProps = (state: any) => ({
    activePost: state.postsState.activePost,
    posts: getPostForPage(state.postsState.posts, state.pageState.itemsPerPage, state.pageState.page, state.filterState),
    user: state.userState.user,
    isLogged: state.userState.isLogged,
    loginFormState: state.userState.loginFormState,
    pageCount: pageCountCalc(state.postsState.posts, state.pageState.itemsPerPage, state.filterState),
    mesType: state.messageState.type,
    mesText: state.messageState.text,
    isOpen: state.messageState.isOpen,
    authMessage: state.userState.message, 
    authType: state.userState.type,
    isPostsLoading: state.postsState.isLoaded,
    currentPost: state.postsState.currentPost,
    filter: state.filterState 
  });
  
export const mapDispatchToProps = (dispatch: any) => ({
    initializePost: (post: any) => dispatch(initialize('postForm', post)),
    postsActions: bindActionCreators(postsActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch),
    pageActions: bindActionCreators(pageActions, dispatch),
    messageActions: bindActionCreators(messageActions, dispatch),
    filterActions: bindActionCreators(filterActions, dispatch)
  });
  