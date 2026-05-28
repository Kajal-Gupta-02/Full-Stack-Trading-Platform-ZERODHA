import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

//Test suite for Hero component
describe('Hero Component', () => {
  test('renders hero image', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText('Hero Pic');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'Media/homeHero.png');
  });
});