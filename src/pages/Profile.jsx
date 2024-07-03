import React from "react";

const Profile = () => {
  const user = {
    username: "JohnDoe",
    email: "john.doe@example.com",
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="flex items-center space-x-4">
        <img
          src="/placeholder.svg"
          alt="User Avatar"
          className="mx-auto rounded-xl object-cover w-24 h-24"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.username}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;