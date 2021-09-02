import * as postsActions from '@store/actionCreators/postsActions';
import * as authActions from '@store/actionCreators/authActions';
import * as pageActions from '@store/actionCreators/pageActions';
import * as messageActions from '@store/actionCreators/messageActions';
import { bindActionCreators } from 'redux';
import { initialize } from 'redux-form';
import { Post } from '@common/types';

const getPostForPage = (posts: Post[], itemsPerPage: number, page: number) => {
    const from = page * itemsPerPage;
    const to = from + itemsPerPage; 
  
    return posts?.slice(from, to);
  }
  
const pageCountCalc = (posts: Post[], itemsPerPage: number) => {
      return posts?.length/itemsPerPage;
  }
  
export const mapStateToProps = (state: any) => ({
    activePost: state.postsState.activePost,
    posts: getPostForPage(state.postsState.posts, state.pageState.itemsPerPage, state.pageState.page),
    user: state.userState.user,
    isLogged: state.userState.isLogged,
    loginFormState: state.userState.loginFormState,
    pageCount: pageCountCalc(state.postsState.posts, state.pageState.itemsPerPage),
    mesType: state.messageState.type,
    mesText: state.messageState.text,
    isOpen: state.messageState.isOpen,
    authMessage: state.userState.message, 
    authType: state.userState.type,
    isPostsLoading: state.postsState.isLoaded 
  });
  
export const mapDispatchToProps = (dispatch: any) => ({
    initializePost: (post: any) => dispatch(initialize('postForm', post)),
    postsActions: bindActionCreators(postsActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch),
    pageActions: bindActionCreators(pageActions, dispatch),
    messageActions: bindActionCreators(messageActions, dispatch)
  });
  