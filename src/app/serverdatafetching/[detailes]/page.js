async function fetchUserData(currentuserId) {
  console.log(currentuserId);
  try {
    const response = await fetch(
      `https://dummyjson.com/users/${currentuserId}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function UserDetail({ params }) {
  const userDetaile = await fetchUserData(params.detailes);

  return (
    <>
      <div>
        <h1>This is user detail page</h1>
        <p>
          {userDetaile.firstName} {userDetaile.lastName}
        </p>
        <p>{userDetaile.email} </p>
        <p>{userDetaile.phone} </p>
        <p>{userDetaile.birthDate} </p>
      </div>
    </>
  );
}
