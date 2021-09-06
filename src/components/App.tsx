import { useEffect } from 'react';
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

  const handleSubmit = (values: any) => isLogged ?
      Boolean(activePost) ? 
        updatePost({...values}) : addPost({...values, isNew: true, userId: user.id}) 
      : 
      openMessage({type: "error", text: "Authorisation is Required!"});  

  const loginSubmit = (values: any) => login({...values});
  const registerSubmit = (values: any) => register({...values});
  const logoutSubmit = () => logout();
  const clickItem = (post: Post) => updatePost({...post, isNew: false});

  useEffect(() => loadPosts(), [loadPosts])
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
             posts={posts}
             editPost={editPost}
             deletePost={deletePost}
             changePage={changePage}
             loginFormChange={loginFormChange}
             setFilter={setFilter}
             clickItem={clickItem}
             handleSubmit={handleSubmit}
             loginSubmit={loginSubmit}
             registerSubmit={registerSubmit}
             logout={logoutSubmit}
             user={user}
             logState={loginFormState}
             currentPost={currentPost}
             filter={filter}
             isPostsLoading={isPostsLoading}
             pageCount={pageCount}
             getPost={getPost}
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