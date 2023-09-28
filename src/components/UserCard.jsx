const UserCard = ({ user }) => {
  return (
    <li className="flex justify-between items-center p-5 bg-blue-900 bg-opacity-80 rounded-xl w-400">
      <div className="text-white">
        <p>
          {user.name} {user.lastName}
        </p>
        <p>Puesto: {user.rol}</p>
        <p>Descripción: {user.bio}</p>
        <p>Contacto: {user.email}</p>
      </div>
      <img
        src={user.avatar}
        alt="Avatar del usuario."
        className="rounded-full w-20 h-20 object-cover"
      />
    </li>
  );
};

export default UserCard;
