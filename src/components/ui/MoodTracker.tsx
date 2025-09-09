// components/ui/MoodTracker.tsx
"use client";

import React, { useState, useEffect } from "react";

interface MoodTrackerProps {
  imageUrl: string | null | undefined; // Image from DB
  email?: string | null;                // Optional email for fallback
}

const MoodTracker: React.FC<MoodTrackerProps> = ({ imageUrl, email }) => {
  const [profileImage, setProfileImage] = useState<string>("/placeholder.svg");

  // Generate an avatar URL based on email
  const getEmailAvatar = (email: string | null | undefined) => {
    if (!email || email.trim() === "") return "/placeholder.svg";
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      email
    )}&background=333&color=fff&rounded=true`;
  };

  useEffect(() => {
    console.log("MoodTracker Props -> imageUrl:", imageUrl, "email:", email);

    if (imageUrl && imageUrl.trim() !== "") {
      setProfileImage(imageUrl);
    } else {
      setProfileImage(getEmailAvatar(email));
    }
  }, [imageUrl, email]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const uploadedImageUrl = URL.createObjectURL(e.target.files[0]);
      setProfileImage(uploadedImageUrl);
      console.log("Uploaded new image:", uploadedImageUrl);
      // TODO: upload to backend / Neon DB here
    }
  };

  return (
    <div className="w-95 h-full bg-[#323232] rounded-xl p-4 flex flex-col items-center">
      <div className="relative w-24 h-24 mt-4">
        <input
          type="file"
          accept="image/*"
          id="profile-upload"
          onChange={handleImageUpload}
          className="hidden"
        />
        <label
          htmlFor="profile-upload"
          className="cursor-pointer block w-full h-full rounded-full overflow-hidden border-4 border-gray-600 hover:border-blue-500 transition"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </label>
      </div>
      
    </div>
  );
};

export default MoodTracker;
