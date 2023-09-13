const User = (props) => {
  //   console.log(props.userData.name);

  const { userData } = props;
  console.log(userData);
  return (
    <div>
      <h2>User Component</h2>
      <h3>Full name: {userData.name}</h3>
      <h3>Age: {userData.age}</h3>
    </div>
  );
};

export default User;
