import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Project, SocialLink } from './types';

export const HERO_TITLE = "Turning Data into Strategy and Strategy into Measurable Results.";
export const HERO_SUBTITLE = "I invite you to explore these interactive projects—a personal showcase of my passion for data science. Feel free to dive in, experiment, and reach out.";

export const ABOUT_TEXT_PARAGRAPH_1 = `My name is Pedro Catarino and I see myself as someone who can bridge the gap between complex data analysis and high-level business strategy. My background combines business and strategy roles — Ex-McKinsey and several business roles across different industries and countries — with hands-on expertise in analytics, Machine Learning and AI.`;

export const ABOUT_TEXT_PARAGRAPH_2 = `More recently I specialized in building scalable solutions using most advanced technologies, from machine learning to AI. Beyond the code, I enjoy solving complex problems, while building compelling business stories and creating solutions that generate meaningfull impact.`;

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Extracting Insights from Google Play Reviews',
    description: 'Customers leave thousands of reviews on banking apps every month. Using NLP and Topic Modeling with LLMs, this project analyzes unstructured text to extract actionable insights on real-time issues affecting customer experience, transforming anxiety into clarity.',
    tags: ['Python', 'Topic Modeling', 'NLP', 'LLM', 'Visualization'],
    imageUrl: '/images/banking_apps.jpg', 
    link: 'https://banking-app-reviews.streamlit.app/'
  },
  {
    id: '2',
    title: 'Scouting Football Players',
    description: 'Football is about passion, but also data. This project helps scouts identify top players based on specific skill sets by scraping and analyzing player statistics from popular databases. It features a custom ranking algorithm and visualization tools to filter players by user-defined criteria.',
    tags: ['Python', 'Web Scraping', 'Machine Learning', 'Visualization'],
    imageUrl: '/images/football.jpg',
    link: 'https://scout-football.streamlit.app/'
  },
  {
    id: '3',
    title: 'Predicting Telco Churn Simulator',
    description: 'A predictive modeling project that goes beyond simple classification. I built an interactive simulator that allows stakeholders to run "what-if" scenarios, visualizing the impact of specific retention actions on churn rates and calculating the potential ROI of intervention strategies.',
    tags: ['Predictive Modeling', 'Churn Analysis', 'What if Simulations'],
    imageUrl: '/images/telco.jpg',
    link: 'https://telcochurn-simulator.streamlit.app/'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pedrofcatarino/',
    icon: <Linkedin className="w-6 h-6" />
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/pcatarino88',
    icon: <Github className="w-6 h-6" />
  },
  {
    platform: 'Email',
    url: 'mailto:pedromsfcatarino@gmail.com',
    icon: <Mail className="w-6 h-6" />
  }
];
