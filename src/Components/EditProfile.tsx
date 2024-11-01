import React, { useEffect, useState } from "react";

interface ProfileFormProps {
    name: string;
    surname: string;
    email: string;
    phone: string;
}

interface EditProfileFormProps {
    initialValues: ProfileFormProps;
    onSave: (data: ProfileFormProps) => void;
    onCancel: () => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ initialValues, onSave, onCancel }) => {
    const [formData, setFormData] = useState<ProfileFormProps>(initialValues);

    useEffect(() => {
        setFormData(initialValues);
    }, [initialValues]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = () => {
        console.log("Saved Data:", formData);
        onSave(formData);
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <h2 className="text-xl mt-4 space-y-4 p-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold mb-4">Personal Info - Profile Edit</h2>
            <div className="space-y-4 w-full max-w-md">
                <div>
                    <label className="block mb-1 font-medium">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mt-4 space-y-4 p-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1 mt-4 space-y-4 p-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium">Surname:</label>
                    <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        className="w-full mt-4 space-y-4 p-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mt-4 space-y-4 p-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full mt-4 space-y-4 p-4 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-2 border rounded"
                    />
                </div>
            </div>
            <div className="flex space-x-4 mt-6">
                <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white py-2 px-4 rounded bg-orange-500 "
                >
                    Save Changes
                </button>
                <button
                    onClick={onCancel}
                    className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditProfileForm;