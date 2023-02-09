import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { deleteContact } from 'redux/contacts/contactsOperations';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import { EditModal } from 'components/EditModal/EditModal';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => toast.success('You delete contact!'))
      .catch(() => toast.error('Something went wrong...Try again!'));
  };
  return (
    <>
      <ListItem
        sx={{
          backgroundColor: 'rgb(37, 150, 190)',
          borderRadius: '4px',
          boxShadow: 4,
        }}
      >
        <ListItemAvatar>
          <Avatar sx={{ color: '#fff', backgroundColor: 'transparent' }}>
            <FaceRoundedIcon sx={{ width: '30px', height: '30px' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={contact.name} secondary={contact.number} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="edit"
            sx={{ '&:hover': { color: '#241422' } }}
            onClick={handleOpenModal}
          >
            <ModeEditOutlineOutlinedIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="edit"
            sx={{ '&:hover': { color: '#241422' } }}
            onClick={handleDelete}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {isOpen && (
        <EditModal
          isOpen={isOpen}
          handleClose={handleCloseModal}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      )}
    </>
  );
};
