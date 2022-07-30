interface props {
  pageName: string;
}

export default function Header({ pageName }: props): JSX.Element {
  return (
    <nav className="flex justify-between h-14 border-b">
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-3xl font-semibold">{pageName}</h1>
      </div>
    </nav>
  );
}
