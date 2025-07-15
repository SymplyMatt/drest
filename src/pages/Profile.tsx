import ProfileForm from "../components/profile/ProfileForm";
import ProfileNavigation from "../components/profile/ProfileNavigation";
import ProfileOverview from "../components/profile/ProfileOverview";
import Layout from "./Layout";

const Profile = () => {
    return (
        <Layout headerGap="">
            <div className="w-full grid grid-cols-1 tmd:grid-cols-[360px_1fr] items-center justify-center">
                <ProfileNavigation />
                <div className="w-full grid grid-cols-1 tmd:grid-cols-5 items-start h-full">
                    <ProfileForm />
                    <ProfileOverview />
                </div>
            </div>
        </Layout>
    );
};

export default Profile;