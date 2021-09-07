import { Typography, Card } from '@material-ui/core';
import { Paginate, PostsFilter, ListItem } from "@components/MainComponent";
import { Loader } from "@common/components";
import { Post} from "@common/types";
import { memo } from 'react';

interface ListComponentProps {
    editPost: (id: string) => void;
    deletePost: (id: string) => void;
    changePage: (data: any) => void;
    setFilter: (filter: string) => void;
    clickItem: (post: Post) => void;
    posts: Post[];
    pageCount: number;
    isPostsLoading: boolean;
    listTitle: string;
    filter: string;
    isLogged: boolean;
}
    
export const ListComponent = memo(({ posts, editPost, deletePost, changePage, pageCount, 
    isPostsLoading, listTitle, filter, setFilter, clickItem, isLogged }: ListComponentProps) => {
        console.log("listCom")
        return (
        <Card className="list_component">
            <Typography variant="h5" gutterBottom>{listTitle}</Typography>
            <PostsFilter
                filter={filter}
                setFilter={setFilter}
            />
             {isPostsLoading && <Loader />}
            <ListItem
                posts={posts}
                isLogged={isLogged}
                editPost={editPost}
                deletePost={deletePost}
                clickItem={clickItem}
            />
            <Paginate
                pageCount={pageCount}
                changePage={changePage}
            />
        </Card>
    );
});