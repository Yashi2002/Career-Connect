const Profile = (props) => {
  const { user } = props;

  return (
    
    <div className="user-profile">
      <div className="username-dt">
        <div className="usr-pic">
          <img src= "https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp" alt="your avatar" />
        </div>
      </div>
      <div className="user-specs">
        <h3>{user?.fullname}</h3>
        <span>{user?.title}</span>
      </div>
    </div>
  );
};

export default Profile;
