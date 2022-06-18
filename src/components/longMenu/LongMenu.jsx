import { useContext } from 'react';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import "./longMenu.css"

export default function DeletePost({post}) {
  const {user} = useContext(AuthContext);

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
    <div className='postDelete'>
      <Chip
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
      />
    </div>
  );
}