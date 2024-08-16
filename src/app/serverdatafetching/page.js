import Link from "next/link";

async function fetchAllData() {
  const response = await fetch("https://dummyjson.com/users");
  const result = await response.json();
  return result.users;
}

export default async function ServerDataFetching() {
  let listofUsers = await fetchAllData();
 
  return (
    <>
      <div>
        <h1>This is Server data fetching.</h1>
        <ul>
          {listofUsers && listofUsers.length > 0
            ? listofUsers.map((item) => <li key={item.id} className="p-3 cursor-pointer"><Link href={`/serverdatafetching/${item.id}`}>{item.firstName}</Link></li>)
            : null}
        </ul>
      </div>
    </>
  );
}
