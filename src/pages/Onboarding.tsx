// src/pages/Onboarding.tsx

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Onboarding() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [level, setLevel] = useState("beginner");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save to localStorage or context if needed
    localStorage.setItem("user", JSON.stringify({ name, level }));

    // Navigate to lessons
    navigate("/lessons");
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Let's personalize your learning</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Your Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            placeholder="e.g., Akhil"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Skill Level</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Continue to Lessons
        </button>
      </form>
    </div>
  );
}
