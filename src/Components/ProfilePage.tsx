import React, { useState } from 'react';

type UserInfo = {
    name: string;
    email: string;
    phone: string;
    location: string;
};

const ProfilePage: React.FC = () => {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        name: 'Ronald Richards',
        email: 'RonaldRich@example.com',
        phone: '(219) 555-0114',
        location: 'California'
    });
    const [isEditingLocation, setIsEditingLocation] = useState(false);
    const [newLocation, setNewLocation] = useState(userInfo.location);

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewLocation(e.target.value);
    };

    const saveLocation = () => {
        setUserInfo((prevInfo) => ({ ...prevInfo, location: newLocation }));
        setIsEditingLocation(false);
    };

    return (
        <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
            <div className="max-w-xl mx-auto p-10 bg-white shadow-md rounded-lg">
                <ProfilePicture />
                <PersonalInfo
                    userInfo={userInfo}
                    onEdit={() => setIsEditingLocation(true)}
                />
                <LocationSection
                    location={userInfo.location}
                    isEditing={isEditingLocation}
                    onCancel={() => setIsEditingLocation(false)}
                    onSave={saveLocation}
                    onLocationChange={handleLocationChange}
                    newLocation={newLocation}
                />
            </div>
        </div>
    );
};

const ProfilePicture: React.FC = () => (
    <div className="flex flex-col items-end">
        <div className="flex items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mx-5">
                <img src="https://via.placeholder.com/800" alt="" className="w-full h-full object-cover" />
            </div>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
                Upload new photo
            </button>
        </div>
        <p className="text-xs text-xl font-bold mb-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg mt-2 text-center">At least 800×800 px recommended. JPG or PNG is allowed.</p>
    </div>
);

const PersonalInfo: React.FC<{ userInfo: UserInfo; onEdit: () => void }> = ({ userInfo, onEdit }) => (
    <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-semibold flex justify-between items-center">
            Personal Info
            <button onClick={onEdit} className="text-orange-500 text-sm">Edit</button> {/* Edit button here */}
        </h3>
<<<<<<< HEAD
        <div className="mt-4 space-y-4 p-4 bg-white ">
=======
        <div className="mt-4 space-y-4 text-xl font-bold mb-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
>>>>>>> c2d86f2e4a5cf4370666cc856c057082c077aab9
            <InfoRow label="Full Name" value={userInfo.name} />
            <InfoRow label="Email" value={userInfo.email} />
            <InfoRow label="Phone" value={userInfo.phone} />
        </div>
    </div>
);

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex justify-between">
        <span className="text-gray-600">{label}</span>
        <span>{value}</span>
    </div>
);

const LocationSection: React.FC<{
    location: string;
    isEditing: boolean;
    onCancel: () => void;
    onSave: () => void;
    onLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    newLocation: string;
}> = ({ location, isEditing, onCancel, onSave, onLocationChange, newLocation }) => (
    <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-lg font-semibold">Location</h3>
        {isEditing ? (
            <div className="mt-2 flex flex-col">
                <input
                    type="text"
                    value={newLocation}
                    onChange={onLocationChange}
                    className="border rounded px-2 py-1 mb-2 focus:outline-none focus:ring focus:border-blue-300"
                />
                <button onClick={onSave} className="bg-orange-500 text-white px-3 py-1 rounded mb-2">
                    Save changes
                </button>
                <button onClick={onCancel} className="text-gray-500">Cancel</button>
            </div>
        ) : (
            <div className="mt-2 flex justify-between items-center">
                <span className="text-gray-700">{location}</span>
            </div>
        )}
    </div>
);

export default ProfilePage;