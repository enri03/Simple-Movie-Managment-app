import React, { useState } from "react";

import { InputField, Button } from "shared/components";

type MovieFormData = Record<"title" | "description" | "imageUrl", string> &
  Record<"director" | "starring", string[]> &
  Record<"duration" | "year", number>;

interface AddMovieFormProps {
  onSubmit: (data: MovieFormData) => void;
  onCancel: () => void;
}

export function AddMovieForm({ onSubmit, onCancel }: AddMovieFormProps) {
  const initialFormData: MovieFormData = {
    title: "",
    description: "",
    imageUrl: "",
    director: [],
    starring: [],
    duration: 0,
    year: 0,
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleInputChange = (
    name: string,
    value: string | string[] | number
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    onSubmit(formData); // Call the onSubmit prop function with the formData
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    onCancel(); // Call the onCancel prop function provided by the parent component
  };
  console.log("jasht", formData);
  return (
    <form className="p-4 ">
      {/* TODO: Add code to make form actions work */}
      <InputField
        value={formData.imageUrl}
        name="Url"
        setter={(value) => handleInputChange("imageUrl", value)}
      />
      <InputField
        value={formData.title}
        name="Title"
        setter={(value) => handleInputChange("title", value)}
      />
      <InputField
        value={formData.duration}
        name="Duration"
        setter={(value) => handleInputChange("duration", Number(value))}
      />
      <InputField
        value={formData.year}
        name="Year"
        setter={(value) => handleInputChange("year", Number(value))}
      />
      <InputField
        value={formData.director}
        name="Director"
        setter={(value) => handleInputChange("director", [value])}
      />
      <InputField
        value={formData.starring}
        name="Starring"
        setter={(value) => handleInputChange("starring", [value])}
      />
      <InputField
        value={formData.description}
        name="Description"
        setter={(value) => handleInputChange("description", value)}
      />
      <div className="text-center">
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </div>
    </form>
  );
}
