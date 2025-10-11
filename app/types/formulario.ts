export type FormularioProps = {
  form: {
    name: string;
    email: string;
    message: string;
  };
  sending: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
