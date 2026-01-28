function AppContainer({ children }) {
  return (
    <main className="flex flex-col p-sm w-screen h-full md:p-md">
      {children}
    </main>
  );
}

export default AppContainer;
