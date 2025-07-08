export default function Form({ children }: { children: React.ReactNode }) {
  return (
    <>
      <form className="form">{children}</form>
    </>
  );
}
