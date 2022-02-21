import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Working for your business and for my pleasure
      </SectionText>
      <Button onClick={() => window.scrollTo({
        top: 500,
        behavior: "smooth"
      })}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;