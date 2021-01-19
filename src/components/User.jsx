const User = ({ email, name }) => {
  return (
    <div key={name + email} className="users__item">
      <h5 className="users__item-name">{name}</h5>
      <p className="users__item-email">{email}</p>
    </div>
  );
};

export default User;
