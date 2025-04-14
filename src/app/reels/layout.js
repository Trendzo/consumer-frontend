import { ReelStoreProvider } from '@/components/reels/ReelStore';

export default function ReelsLayout({ children }) {
  return (
    <ReelStoreProvider>
      {children}
    </ReelStoreProvider>
  );
}