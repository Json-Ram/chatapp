import { useEffect, useContext } from 'react';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';


export default function DeletePost({post}) {
  const {user} = useContext(AuthContext)


  const handleClick = () => {
    console.info('Are you sure you want to delete this post?');
  };

  const handleDelete = async() => {
    console.info('Post Deleted');
    try {
      console.log(user)
      await axios.delete("/posts/" + post._id, { data: {userId: user._id}})
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Delete Post"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
    </Stack>
  );
}