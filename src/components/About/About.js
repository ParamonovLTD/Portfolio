import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './AboutStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const About = () => {
  return (
    <Section id='about'>
      <SectionDivider />
      <SectionTitle main>About me</SectionTitle>
      <SectionText>A student who has extensive experience in self-development and self-learning, good experience in commercial development, who quickly learns new material, and works well in a team</SectionText>
    </Section>
  );
};

export default About;
