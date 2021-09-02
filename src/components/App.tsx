import '@styles/index.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { User, Post } from '@common/types';
import { mapDispatchToProps, mapStateToProps } from '@services/initAppProps';
import { MessageComponent, Navbar } from '@common/components';
import { MainComponent } from '@components/MainComponent';
import { Route, Switch } from "react-router-dom";
import { ProfileComponent } from './Profile/ProfileComponent';

interface AppProps {
  activePost: any;
  initializePost: any;
  postsActions: any;
  pageActions: any;
  authActions: any;
  posts: Post[];
  user: User;
  isLogged: boolean;
  loginFormState: any;
  pageCount: any;
  mesType: any;
  mesText: string;
  isOpen: boolean;
  messageActions: any;
  authMessage: string;
  authType: any;
  isPostsLoading: boolean;
}

const App = ({ activePost, initializePost, postsActions, authActions, posts, 
  user, isLogged, loginFormState, pageCount, pageActions, mesType, mesText, 
  isOpen, messageActions, authMessage, authType, isPostsLoading }: AppProps) => {
 
  const {addPost, editPost, updatePost, deletePost, loadPosts} = postsActions; 
  const {login, register, logout, getProfile, loginFormChange} = authActions;
  const {changePage} = pageActions;
  const {openMessage, closeMessage} = messageActions;

   const handleSubmit = (values: any) => {
     isLogged ?
        Boolean(activePost) ? updatePost({...values}) : addPost({...values/*, id: uuidv4()*/})
        : openMessage({type: "error", text: "Authorisation is Required!"});
  }
  const loginSubmit = (values: any) => login({...values});
  const registerSubmit = (values: any) => register({...values});
  const logoutSubmit = () => {
    localStorage.removeItem("token");
    logout();
  }

  useEffect (() => loadPosts(), [loadPosts])
  useEffect(() => getProfile(), [getProfile]);
  useEffect(() => initializePost(activePost), [activePost, initializePost]);
  useEffect(() => authMessage !== "" && 
    openMessage({type: authType, text: authMessage}), 
    [authMessage, authType, openMessage]);

  return (
    <div className="app_container">
      <Navbar/>
      <Switch>
        <Route exact path='/' render={() => 
          <MainComponent 
             posts={posts}
             editPost={editPost}
             deletePost={deletePost}
             changePage={changePage}
             pageCount={pageCount}
             isPostsLoading={isPostsLoading}
             handleSubmit={handleSubmit}
             loginSubmit={loginSubmit}
             registerSubmit={registerSubmit}
             loginFormChange={loginFormChange}
             user={user}
             logState={loginFormState}
             logout={logoutSubmit}
           />
        } />
        <Route exact path='/profile' render={() => 
          <ProfileComponent 
            user={user}
          />
        }/>
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