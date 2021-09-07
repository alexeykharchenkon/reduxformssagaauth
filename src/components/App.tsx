import { useCallback, useEffect} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import '@styles/index.css';
import { User, Post } from '@common/types';
import { mapDispatchToProps, mapStateToProps } from '@services/initAppProps';
import { MessageComponent, Navbar } from '@common/components';
import { MainComponent } from '@components/MainComponent';
import { ProfileComponent } from '@components/ProfileComponent';

interface AppProps {
  initializePost: any;
  postsActions: any;
  pageActions: any;
  authActions: any;
  messageActions: any;
  filterActions: any;
  activePost: Post;
  posts: Post[];
  user: User;
  isLogged: boolean;
  loginFormState: string;
  pageCount: number;
  mesType: string;
  mesText: string;
  isOpen: boolean;
  authMessage: string;
  authType: string;
  isPostsLoading: boolean;
  currentPost: Post | undefined;
  filter: string;
}

const App = ({ activePost, initializePost, postsActions, authActions, posts, user, 
  isLogged, loginFormState, pageCount, pageActions, mesType, mesText, isOpen, 
  messageActions, authMessage, authType, isPostsLoading, currentPost, filter, 
  filterActions }: AppProps) => {
 
  const { addPost, editPost, updatePost, deletePost, loadPosts, getPost } = postsActions; 
  const { login, register, logout, getProfile, loginFormChange } = authActions;
  const { changePage } = pageActions;
  const { openMessage, closeMessage } = messageActions;
  const { setFilter } = filterActions;

  const handleSubmit = useCallback((values: any) => 
    isLogged ?
      Boolean(activePost) ? updatePost({...values}) : addPost({...values, isNew: true, userId: user.id}) 
      : 
      openMessage({type: "error", text: "Authorisation is Required!"}),
  [updatePost, openMessage, addPost, isLogged, activePost]); 

  const loginSubmit = useCallback((values: any) => login({...values}), [login]);
  const registerSubmit = useCallback((values: any) => register({...values}), [register]);
  const logoutSubmit = useCallback(() => logout(), [logout]);
  const clickItem = useCallback((post: Post) => updatePost({...post, isNew: false}), [updatePost]);
  const editPostC = useCallback((id: string) => editPost(id), [editPost]);
  const deletePostC = useCallback((id: string) => deletePost(id), [deletePost]);
  const changePageC = useCallback((page: any) => changePage(page), [changePage]);
  const setFilterC = useCallback((filter: string) => setFilter(filter), [setFilter]);
  const loginFormChangeC = useCallback((state: string) => loginFormChange(state), [loginFormChange]);
  const getPostC = useCallback((postId: string) => getPost(postId), [getPost]); 
  
  useEffect(() => loadPosts(), [loadPosts]);
  useEffect(() => getProfile(), [getProfile]);
  useEffect(() => initializePost(activePost), [activePost, initializePost]);
  useEffect(() => authMessage !== "" && 
    openMessage({type: authType, text: authMessage}), [authMessage, authType, openMessage]); 

  return (
    <div className="app_container">
      <Navbar/>
      <Switch>
        <Route path='/profile'>
          <ProfileComponent 
            user={user}
          />
        </Route>
        <Route path='/'>
          <MainComponent 
             editPost={editPostC}
             deletePost={deletePostC}
             changePage={changePageC}
             loginFormChange={loginFormChangeC}
             getPost={getPostC}
             setFilter={setFilterC}
             clickItem={clickItem}
             handleSubmit={handleSubmit}
             loginSubmit={loginSubmit}
             registerSubmit={registerSubmit}
             logout={logoutSubmit}
             posts={posts}
             user={user}
             logState={loginFormState}
             currentPost={currentPost}
             filter={filter}
             isPostsLoading={isPostsLoading}
             pageCount={pageCount}
             isLogged={isLogged}
           />
        </Route>
      </Switch>
      <MessageComponent 
        isOpen={isOpen}
        message={mesText}
        type={mesType}
        closeMessage={closeMessage}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)