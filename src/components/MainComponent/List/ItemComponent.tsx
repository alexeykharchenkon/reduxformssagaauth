import { Post } from "@common/types";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Card, Typography, IconButton } from '@material-ui/core';
import { NavLink } from "react-router-dom";

interface ItemComponentProps {
    post: Post;
    editPost: (id: string) => void;
    deletePost: (id: string) => void;
    clickItem: (post: Post) => void;
}

export const ItemComponent = ({post, editPost, deletePost, clickItem}: ItemComponentProps ) => {
    return (
        <Card className="list_item">
            <div className="list_item_text">
                <div>
                    <NavLink 
                        to={`/post/${post.id}`}
                        onClick={() => clickItem(post)} 
                        className="item_navlink"
                    >
                        <Typography variant="h6" gutterBottom>
                            {post.title}
                        </Typography>
                    </NavLink>
                </div>
                <div>
                    <Typography variant="subtitle2" gutterBottom>
                        {post.text.slice(0, 100)}
                    </Typography>
                </div>
                <div>
                    <Typography variant="subtitle1" gutterBottom>
                        {post.isNew && <span className="new_item">New</span>}
                        {!post.isNew && <span className="visited_item">Visited</span>}
                    </Typography>
                </div>
            </div>
            <div className="list_item_buttons">
                <IconButton onClick={() => deletePost(post.id)}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={() => editPost(post.id)}>
                    <EditIcon fontSize="small" />
                </IconButton>
            </div>
        </Card>
    );
}