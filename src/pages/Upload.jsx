import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const UploadPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Upload Image</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Image Upload</label>
          <Input type="file" {...register("image")} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <Input type="text" {...register("title")} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <Textarea {...register("description")} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UploadPage;