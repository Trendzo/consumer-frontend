import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import GlassPanels from '@/components/layout/GlassPanels';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileStats from '@/components/profile/ProfileStats';
import ProfileTabs, { ProfileTabProvider } from '@/components/profile/ProfileTabs';
import ProfileContent from '@/components/profile/ProfileContent';

export const metadata = {
  title: 'Your Profile | Trendzo - Fashion Delivered in 60 Minutes',
  description: 'Manage your profile, orders, and preferences with 60-minute delivery from your favorite stores.',
};

export default function ProfilePage() {
  return (
    <>
      <GlassPanels />
      
      <Header />
      
      <Container className="pb-20 pt-2">
        {/* Profile curved card with avatar and basic info */}
        <ProfileHeader />
        
        {/* Stats showcase */}
        <ProfileStats />
        
        {/* Content tabs with provider for shared state */}
        <div className="mt-8">
          <ProfileTabProvider>
            <ProfileTabs />
            <ProfileContent />
          </ProfileTabProvider>
        </div>
      </Container>
    </>
  );
}