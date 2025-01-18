import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {
    const { user } = useAuth()
    

    return (
        <div>
            <p className="text-3xl font-medium my-10">Hi, WellCome {user?.displayName ? user.displayName : 'Back'} !</p>
        </div>
    );
};

export default UserHome;