import '@styles/index.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ListComponent } from '@components/List/ListComponent';
import { v4 as uuidv4 } from 'uuid';
import { RightBar } from '@components/RightBar/RightBar';
import { User, Post } from '@common/types';
import { mapDispatchToProps, mapStateToProps } from '@common/services/initAppProps';

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
}

const App = ({activePost, initializePost, postsActions, authActions, posts, 
  user, isLogged, loginFormState, pageCount, pageActions}: AppProps) => {
 
   const {addPost, editPost, updatePost, deletePost} = postsActions; 
   const {login, register, logout, loginFormChange} = authActions;
   const {changePage} = pageActions;

   const handleSubmit = (values: any) => {
      Boolean(activePost) ? 
      updatePost({ id: values.id, title: values.title, text: values.text }) :
      addPost({ id: uuidv4(), title: values.title, text: values.text });
      initializePost(activePost);
  }

  const loginSubmit = (values: any) => {
      login({login: values.login, password: values.password});
  }

  const registerSubmit = (values: any) => {
    register({login: values.login, password: values.password});
  }

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
          logout={logout}
        />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)