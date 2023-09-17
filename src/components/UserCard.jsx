const UserCard = ({ user }) => {
  return (
    <li className="flex justify-between items-center p-5 bg-blue-900 bg-opacity-80 rounded-xl w-350">
      <div className="text-white">
        <p>
          {user.first_name} {user.last_name}
        </p>
        <p>{user.email}</p>
      </div>
      <img
        src={user.avatar}
        alt="Avatar del usuario."
        className="rounded-full w-20"
      />
    </li>
  );
};

export default UserCard;
