import { HeroSection, ListSection } from "../../organisms";
import { CardsSection } from "../../organisms/overview/cards-section";
import { QuoteSection } from "../../organisms/overview/quote-section";

export const Overview = () => {
  return (
    <>
      <HeroSection />
      <ListSection />
      <QuoteSection />
      <CardsSection />
    </>
  );
};
