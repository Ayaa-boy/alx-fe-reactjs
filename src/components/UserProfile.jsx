import React from 'react';

const UserProfile = (props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-center mt-6">
      <h2 className="text-xl font-bold text-gray-800">{props.name}</h2>
      <p className="text-gray-600">Age: {props.age}</p>
      <p className="text-gray-700">{props.bio}</p>
    </div>
  );
};

export default UserProfile;
