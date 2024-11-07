async function fetchUser(userID) {
    const res = await fetch("https://reqres.in/api/users/" + userID);
    const { data } = await res.json();
    return data;
}

async function UserPage({ params }) {
    const user = await fetchUser(params.id);

    return (
        <div className="bg-slate-400 p-4 rounded-md text-center">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="m-auto my-4 rounded-full"/>
            <h3 className="text-3xl font-bold">{user.id} - {user.first_name} {user.last_name}</h3>
            <p>Email: {user.email}</p>
        </div>
    );
}
export default UserPage;