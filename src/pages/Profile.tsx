import Navigation from "@/components/Navigation";
import ProfileForm from "@/components/ProfileForm";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <ProfileForm />
      </main>
    </div>
  );
};

export default Profile;