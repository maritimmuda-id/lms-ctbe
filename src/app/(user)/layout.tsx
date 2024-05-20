import Backgroundblue from '@/components/BackgroundsEffect';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div>
        <Backgroundblue />
        {children}
      </div>
    </div>
  );
}
