import Main from 'app/main';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Main>{children}</Main>
      </body>
    </html>
  );
};

export default RootLayout;
