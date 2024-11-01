import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditProfileForm from './EditProfile';

type UserInfo = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    location: string;
};

const ProfilePage: React.FC = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<UserInfo>({
        name: 'Ronald Richards',
        surname: '',
        email: 'RonaldRich@example.com',
        phone: '(219) 555-0114',
        location: 'California'
    });
    const [isEditing, setIsEditing] = useState(false);
    const [newLocation, setNewLocation] = useState(userInfo.location);
    const [isEditingLocation, setIsEditingLocation] = useState(false);

    const handleEditProfile = () => {
        setIsEditing(true);
    };

    const handleSave = (data: UserInfo) => {
        setUserInfo(data);
        setIsEditing(false);
        navigate('/profile');
    };

    const handleCancel = () => {
        setIsEditing(false);
        setNewLocation(userInfo.location);
        setIsEditingLocation(false);
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewLocation(e.target.value);
    };

    const handleLocationSave = () => {
        setUserInfo(prev => ({ ...prev, location: newLocation }));
        setIsEditingLocation(false);
    };

    const handleEditLocation = () => {
        setNewLocation(userInfo.location);
        setIsEditingLocation(true);
    };

    return (
        <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
            <div className="max-w-xl mx-auto p-10 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-md rounded-lg">
                {isEditing ? (
                    <EditProfileForm
                        initialValues={{
                            name: userInfo.name,
                            surname: userInfo.surname,
                            email: userInfo.email,
                            phone: userInfo.phone,
                            location: newLocation,
                        }}
                        onSave={handleSave}
                        onCancel={handleCancel}
                    />
                ) : (
                    <>
                        <ProfilePicture />
                        <PersonalInfo
                            userInfo={userInfo}
                            onEdit={handleEditProfile}
                        />
                        <LocationSection
                            location={userInfo.location}
                            newLocation={newLocation}
                            onLocationChange={handleLocationChange}
                            onLocationSave={handleLocationSave}
                            onCancel={handleCancel}
                            isEditingLocation={isEditingLocation}
                            onEditLocation={handleEditLocation}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

const ProfilePicture: React.FC = () => (
    <div className="flex flex-col items-start p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
        <div className="flex items-center p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">
            <div className="w-24 h-24 rounded-full overflow-hidden p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg mr-4">
                <img src="https://via.placeholder.com/800" alt="" className="w-full h-full object-cover" />
            </div>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
                Upload new photo
            </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-left">At least 800×800 px recommended. JPG or PNG is allowed.</p>
    </div>
);

const PersonalInfo: React.FC<{
    userInfo: UserInfo;
    onEdit: () => void;
}> = ({ userInfo, onEdit }) => (
    <div className="mt-6 p-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg rounded-lg">
        <h3 className="text-lg font-semibold flex justify-between items-center">
            Personal Info
            <button onClick={onEdit} className="text-orange-500 text-sm">Edit</button>
        </h3>
        <div className="mt-4 space-y-4 p-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg ">
            <InfoRow label="Full Name" value={userInfo.name} />
            <InfoRow label="Surname" value={userInfo.surname} />
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
    newLocation: string;
    onLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onLocationSave: () => void;
    onCancel: () => void;
    isEditingLocation: boolean;
    onEditLocation: () => void;
}> = ({ location, newLocation, onLocationChange, onLocationSave, onCancel, isEditingLocation, onEditLocation }) => {
    return (
        <div className="mt-6 p-4  space-y-4 h-[600px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-md ">
            <h3 className="text-lg font-semibold flex justify-between items-center">
                Location
                {!isEditingLocation && (
                    <button onClick={onEditLocation} className="text-orange-500 text-sm">Edit</button>
                )}
            </h3>
            {isEditingLocation ? (
                <div className="mt-2 flex flex-col">
                    <input
                        type="text"
                        value={newLocation}
                        onChange={onLocationChange}
                        className=" px-2 mt-4 space-y-4  bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-1 mb-2 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <button onClick={onLocationSave} className="bg-orange-500 text-white px-3 py-1 rounded mb-2">
                        Save changes
                    </button>
                    <button onClick={onCancel} className="text-gray-500">Cancel</button>
                </div>
            ) : (
                <div className="mt-2 flex justify-between items-center">
                        <span className="mt-4 space-y-4  bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg">{location}</span>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
