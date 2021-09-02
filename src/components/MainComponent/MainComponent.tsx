import '@styles/index.css';
import { RightBar, ListComponent, PostComponent } from '@components/MainComponent';
import { User, Post } from '@common/types';
import { Route, Switch } from "react-router-dom";

interface MainProps {
  posts: Post[];
  user: User;
  logState: any;
  pageCount: any;
  isPostsLoading: boolean;
  editPost: any;
  deletePost: any;
  changePage: any;
  handleSubmit: any;
  loginSubmit: any;
  registerSubmit: any;
  loginFormChange: any;
  logout: any;
}

export const MainComponent = ({ posts, user, logState, pageCount, 
  isPostsLoading, editPost, deletePost, changePage, handleSubmit, loginSubmit,
  registerSubmit, loginFormChange, logout }: MainProps) => {

  return (
      <div className="app">
        <Switch>
          <Route path='/' render={() => 
            <ListComponent 
              posts={posts}
              editPost={editPost}
              deletePost={deletePost}
              changePage={changePage}
              pageCount={pageCount}
              isPostsLoading={isPostsLoading}
              listTitle="Posts List"
            />
          } />
          <Route path='/post' render={() => 
            <PostComponent 
              post={posts[0]}
              editPost={editPost}
              deletePost={deletePost}
            />
          } />
        </Switch>
        <RightBar 
          handleSubmit={handleSubmit}
          loginSubmit={loginSubmit}
          registerSubmit={registerSubmit}
          loginFormChange={loginFormChange}
          user={user}
          logState={logState}
          logout={logout}
        />
      </div>
  );
}