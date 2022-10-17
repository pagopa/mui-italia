import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { SingleFileInput } from "../components/SingleFileInput/SingleFileInput";

export default {
  title: "Components/SingleFileInput",
  component: SingleFileInput,
} as ComponentMeta<typeof SingleFileInput>;

export const Default: ComponentStory<typeof SingleFileInput> = () => {
  const [file, setFile] = React.useState<File | null>(null);

  const handleSelect = (file: File) => {
    setFile(file);
  };

  const handleRemove = () => {
    setFile(null);
  };

  return (
    <SingleFileInput
      label="Document (required)"
      value={file}
      accept={["image/png"]}
      onFileSelected={handleSelect}
      onFileRemoved={handleRemove}
      dropzoneLabel="Drag and drop your .png image here or click to select from your computer"
      rejectedLabel="File type not supported"
    />
  );
};

export const Loading: ComponentStory<typeof SingleFileInput> = () => (
  <SingleFileInput
    label="Document (required)"
    value={null}
    onFileSelected={() => {}}
    onFileRemoved={() => {}}
    dropzoneLabel=""
    loading={true}
  />
);

export const Error: ComponentStory<typeof SingleFileInput> = () => (
  <SingleFileInput
    label="Document (required)"
    value={null}
    error
    onFileSelected={() => {}}
    onFileRemoved={() => {}}
    dropzoneLabel="Drag and drop your .png image here or click to select from your computer"
  />
);

export const WithFile: ComponentStory<typeof SingleFileInput> = () => (
  <SingleFileInput
    label="Document (required)"
    value={new File([], "test.png")}
    onFileSelected={() => {}}
    onFileRemoved={() => {}}
    dropzoneLabel="Drag and drop your .png image here or click to select from your computer"
  />
);

export const WithTruncatedFileName: ComponentStory<
  typeof SingleFileInput
> = () => (
  <SingleFileInput
    label="Document (required)"
    value={
      new File(
        [],
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.docx"
      )
    }
    onFileSelected={() => {}}
    onFileRemoved={() => {}}
    dropzoneLabel="Drag and drop your .png image here or click to select from your computer"
  />
);
