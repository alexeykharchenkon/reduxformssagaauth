import '@styles/index.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ListComponent } from '@components/List/ListComponent';
import { v4 as uuidv4 } from 'uuid';
import { RightBar } from '@components/RightBar/RightBar';
import { User, Post } from '@common/types';
import { mapDispatchToProps, mapStateToProps } from '@common/services/initAppProps';
import { MessageComponent } from '@common/components/MessageComponent';

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
}

const App = ({ activePost, initializePost, postsActions, authActions, posts, 
  user, isLogged, loginFormState, pageCount, pageActions, mesType, mesText, 
  isOpen, messageActions, authMessage, authType }: AppProps) => {
 
   const {addPost, editPost, updatePost, deletePost} = postsActions; 
   const {login, register, logout, getProfile, loginFormChange} = authActions;
   const {changePage} = pageActions;
   const {openMessage, closeMessage} = messageActions;

   const handleSubmit = (values: any) => {
     isLogged ?
      Boolean(activePost) ? updatePost({...values}) : addPost({...values, id: uuidv4()})
     : openMessage({type: "error", text: "Authorisation is Required!"});
  }
  const loginSubmit = (values: any) => login({...values});
  const registerSubmit = (values: any) => register({...values});
  const logoutSubmit = () => {
    localStorage.removeItem("token");
    logout();
  }

  useEffect(() => {
    if(authMessage !== "") openMessage({type: authType, text: authMessage});
  }, [authMessage, authType]);
  useEffect(() => getProfile(), [getProfile]);
  useEffect(() => initializePost(activePost), [activePost, initializePost]);

  return (
    <div className="app_container">
      <div className="app">
        <ListComponent 
          posts={posts}
          editPost={editPost}
          deletePost={deletePost}
          changePage={changePage}
          pageCount={pageCount}
        />
        <RightBar 
          handleSubmit={handleSubmit}
          loginSubmit={loginSubmit}
          registerSubmit={registerSubmit}
          loginFormChange={loginFormChange}
          user={user}
          logState={loginFormState}
          logout={logoutSubmit}
        />
      </div>
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