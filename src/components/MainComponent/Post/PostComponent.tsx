import { Post } from "@common/types";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Card, Typography, IconButton } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { memo, useEffect } from "react";

interface PostComponentProps {
    editPost: (id: string) => void;
    deletePost: (id: string) => void;
    getPost: (id: string) => void;
    post: Post | undefined;
    isLogged: boolean;
}

export const PostComponent = memo(({ editPost, deletePost, getPost, post, isLogged } : PostComponentProps ) => {   
    let postId = useParams();
    useEffect(() => getPost(postId as string), [getPost]);
    console.log("post")
    return (
        <Card className="list_component">
            <Typography variant="h5" gutterBottom>
                {post?.title}
            </Typography>
            <Card className="post"> 
                <Typography variant="body2" component="p">
                    {post?.text}
                </Typography>
                {isLogged && /*user.id === post?.user.id &&*/
                    <div className="post_buttons">
                        <Typography variant="subtitle2" gutterBottom>
                            Author: {/*post.user.login*/}
                        </Typography>
                        <IconButton onClick={() => deletePost(post?.id as string)}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                        <IconButton onClick={() => editPost(post?.id as string)}>
                            <EditIcon fontSize="small" />
                        </IconButton>
                    </div>
                }
            </Card>
        </Card>
    );
});