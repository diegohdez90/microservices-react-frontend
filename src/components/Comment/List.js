import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentItem from './Item';

const List = ({
  id
}) => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsByPostId();
  }, []);

  const fetchCommentsByPostId = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${id}/comments`);
    setComments(res.data);
  }

  const commentItems = comments.map(comment => (
    <CommentItem
      key={comment.id}
      comment={comment}
    />
  ));

  return (
    <ul>
      {commentItems}
    </ul>
  );
}

export default List;
