import Navbar from "@/components/home/navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
