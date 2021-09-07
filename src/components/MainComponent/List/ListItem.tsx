import { ItemComponent} from "@components/MainComponent";
import { Post } from "@common/types";
import { memo } from 'react';

interface ListItemProps {
    editPost: (id: string) => void;
    deletePost: (id: string) => void;
    clickItem: (post: Post) => void;
    posts: Post[];
    isLogged: boolean;
}
    
export const ListItem = memo(({ posts, editPost, deletePost, clickItem, isLogged}: ListItemProps) => {
    console.log("list")
    return (
        <>
            {posts?.map(post => (
                <ItemComponent 
                    key={post.id}
                    post={post}
                    editPost={editPost}
                    deletePost={deletePost}
                    clickItem={clickItem}
                    isLogged={isLogged}
                />
            ))}
        </>
    );
});