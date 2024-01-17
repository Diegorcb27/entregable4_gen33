import React from "react";
import "./styles/UserCard.css"

const UserCard = ({ user, deleteUser, setUpdateInfo, setIsFormClose }) => {
  const handleEdit = () => {
    setUpdateInfo(user);
    setIsFormClose(false);
  };

  const handleDelete = () => {
    deleteUser(user.id);
  };

  return (
    <div className="user_container">
      <article className="card_user">
        <h2 className="card_user_name">
          {user.first_name} {user.last_name}
        </h2>

        <div>
          <hr />
        </div>
          
       
        

        <ul className="card_user_list">
          <li className="card_user_data"> 
            <span className="card_field_name">EMAIL </span>
            <span className="card_user_field">{user.email}</span>
          </li>
          <li className="card_user_data">
            <span className="card_field_name">BIRTHDAY </span>
            <span className="card_user_field"><i className='bx bx-gift'></i> {user.birthday}</span>
          </li>
        </ul>

        
        <div>
          <hr />
        </div>
       

        <footer className="card_footer">
          <button className="card_btn trash" onClick={handleDelete}>
            <i className="bx bx-trash"></i>
          </button>
          <button className="card_btn edit" onClick={handleEdit}>
            <i className="bx bx-edit"></i>
          </button>
        </footer>
      </article>
    </div>
  );
};

export default UserCard;
