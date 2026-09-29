import { StoryFn, Meta } from '@storybook/react-vite';
import { useState } from 'react';

import { breakpointsChromaticValues } from '@theme';
import MISingleFileInput from './MISingleFileInput';

const componentMaxWidth = 900;

export default {
  title: 'Components/MISingleFileInput',
  component: MISingleFileInput,
  parameters: {
    chromatic: {
      viewports: breakpointsChromaticValues.filter((resolution) => resolution <= componentMaxWidth),
    },
    backgroundKey: 'white',
  },
} as Meta<typeof MISingleFileInput>;

export const Default: StoryFn<typeof MISingleFileInput> = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleSelect = (file: File) => {
    setFile(file);
  };

  const handleRemove = () => {
    setFile(null);
  };

  return (
    <MISingleFileInput
      label="Document (required)"
      value={file}
      accept={['image/png']}
      onFileSelected={handleSelect}
      onFileRemoved={handleRemove}
      dropzoneLabel="Trascina qui l’Accordo di Adesione firmato"
      dropzoneSupportText="Dimensione massima 300 x 300px Formato .jpg o .png"
      dropzoneButton="carica il file"
      rejectedLabel="Caricamento fallito"
      helperText="*Campo obbligatorio"
    />
  );
};

export const Loading: StoryFn<typeof MISingleFileInput> = () => (
  <MISingleFileInput
    label="Document (required)"
    value={null}
    onFileSelected={() => {}}
    onFileRemoved={() => {}}
    dropzoneLabel="Trascina qui l’Accordo di Adesione firmato"
    dropzoneSupportText="Dimensione massima 300 x 300px Formato .jpg o .png"
    dropzoneButton="carica il file"
    loading={true}
    helperText="*Campo obbligatorio"
  />
);

export const Error: StoryFn<typeof MISingleFileInput> = () => (
  <MISingleFileInput
    label="Document (required)"
    value={null}
    error
    onFileSelected={() => {}}
    onFileRemoved={() => {}}
    dropzoneLabel="Trascina qui l’Accordo di Adesione firmato"
    dropzoneSupportText="Dimensione massima 300 x 300px Formato .jpg o .png"
    dropzoneButton="carica il file"
    helperText="*Campo obbligatorio"
  />
);

export const WithFile: StoryFn<typeof MISingleFileInput> = () => (
  <MISingleFileInput
    label="Document (required)"
    value={
      new File(['demo'], 'filename.csv', {
        lastModified: new Date('2026-10-06T14:17:00').getTime(),
      })
    }
    onFileSelected={() => {}}
    onFileRemoved={() => {}}
    dropzoneLabel="Trascina qui l’Accordo di Adesione firmato"
    dropzoneSupportText="Dimensione massima 300 x 300px Formato .jpg o .png"
    dropzoneButton="carica il file"
    helperText="*Campo obbligatorio"
  />
);

export const WithTruncatedFileName: StoryFn<typeof MISingleFileInput> = () => (
  <MISingleFileInput
    label="Document (required)"
    value={new File([], 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.docx')}
    onFileSelected={() => {}}
    onFileRemoved={() => {}}
    dropzoneLabel="Trascina qui l’Accordo di Adesione firmato"
    dropzoneSupportText="Dimensione massima 300 x 300px Formato .jpg o .png"
    dropzoneButton="carica il file"
    helperText="*Campo obbligatorio"
  />
);

export const Failed: StoryFn<typeof MISingleFileInput> = () => (
  <MISingleFileInput
    label="Document (required)"
    value={null}
    rejected
    onFileSelected={() => {}}
    onFileRemoved={() => {}}
    dropzoneLabel="Trascina qui l’Accordo di Adesione firmato"
    dropzoneSupportText="Dimensione massima 300 x 300px Formato .jpg o .png"
    dropzoneButton="carica il file"
    rejectedLabel="Caricamento fallito"
    retryButtonLabel="Riprova"
    helperText="*Campo obbligatorio"
  />
);
