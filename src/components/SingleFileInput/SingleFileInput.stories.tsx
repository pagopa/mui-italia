import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { breakpointsChromaticValues } from '@theme';

import { SingleFileInput } from './SingleFileInput';

const componentMaxWidth = 900;

export default {
  title: 'Components/SingleFileInput',
  component: SingleFileInput,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
  },
} as ComponentMeta<typeof SingleFileInput>;

export const Default: ComponentStory<typeof SingleFileInput> = () => {
  const [file, setFile] = useState<File | null>(null);

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
      accept={['image/png']}
      onFileSelected={handleSelect}
      onFileRemoved={handleRemove}
      dropzoneLabel="Drag and drop your .png image here or"
      dropzoneButton="upload a file"
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
    dropzoneButton=""
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
    dropzoneLabel="Drag and drop your .png image here or"
    dropzoneButton="upload a file"
  />
);

export const WithFile: ComponentStory<typeof SingleFileInput> = () => (
  <SingleFileInput
    label="Document (required)"
    value={new File([], 'test.png')}
    onFileSelected={() => {}}
    onFileRemoved={() => {}}
    dropzoneLabel="Drag and drop your .png image here or"
    dropzoneButton="upload a file"
  />
);

export const WithTruncatedFileName: ComponentStory<typeof SingleFileInput> = () => (
  <SingleFileInput
    label="Document (required)"
    value={new File([], 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.docx')}
    onFileSelected={() => {}}
    onFileRemoved={() => {}}
    dropzoneLabel="Drag and drop your .png image here or"
    dropzoneButton="upload a file"
  />
);
