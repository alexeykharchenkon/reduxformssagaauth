import { Typography, Card } from '@material-ui/core';
import { Paginate, ItemComponent, PostsFilter } from "@components/MainComponent";
import { Loader } from "@common/components";
import { Post } from "@common/types";

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
}
    

export const ListComponent = ({ posts, editPost, deletePost, changePage, 
    pageCount, isPostsLoading, listTitle, filter, setFilter, clickItem }: ListComponentProps) => {
    return (
        <Card className="list_component">
            <Typography variant="h5" gutterBottom>{listTitle}</Typography>
            <PostsFilter
                filter={filter}
                setFilter={setFilter}
            />
             {isPostsLoading && <Loader />}
                {posts?.map(post => (
                    <ItemComponent 
                        key={post.id}
                        post={post}
                        editPost={editPost}
                        deletePost={deletePost}
                        clickItem={clickItem}
                    />
                ))}
            <Paginate
                pageCount={pageCount}
                changePage={changePage}
            />
        </Card>
    );
}