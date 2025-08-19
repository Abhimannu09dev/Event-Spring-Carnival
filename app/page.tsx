import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import HighlightsSection from '@/app/components/HighlightsSection';
import ScheduleSection from '@/app/components/ScheduleSection';
import VenueSection from '@/app/components/VenueSection';
import CallToActionSection from '@/app/components/CallToActionSection';
import FooterSection from '@/app/components/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-green-50">
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <ScheduleSection />
      <VenueSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}