
import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

const DeleteModal = (data) => {
  // console.log(data)
  const [open, setOpen] = useState(false);
  const show = () => setOpen(true);
  const close = () => setOpen(false)

  const handleDelete = (id) => {
    setOpen(false);
    // console.log(data.id)
    // deleteData(data.id)
  }

  return (
    <React.Fragment>
      <Button className= "ui button" color="red" onClick={show}>
        Delete
      </Button>
      <Modal size="tiny" open={open} onClose={close}>
        <Modal.Header>Delete Data</Modal.Header>
        <Modal.Content>
          <p>Are you sure?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={close}>No</Button>
          <Button positive onClick={() => console.log(data.id)}>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};
export default DeleteModal;

