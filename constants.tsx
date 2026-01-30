import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Project, SocialLink } from './types';

export const HERO_TITLE = "Turning Data into Strategy and Strategy into Results.";
export const HERO_SUBTITLE = "Hi there! My name is Pedro and this is my personal portfolio where I share selected projects i did to explore my passion for data.";

export const ABOUT_TEXT_PARAGRAPH_1 = `During my career I've held several management roles where I've developed my business and strategic thinking. Along the way, I developed a strong passion for data. Curiosity and a desire to learn naturally led me into the fascinating world of Data Science, Machine Learning and (how not) AI.`;

export const ABOUT_TEXT_PARAGRAPH_2 = `I'm a strong believer of learning by doing and that the best way to get to know someone's work is to see it in action. As a result, I developed this page to share projects & prototypes I've built on topics of my interest, mostly on my free time.` 

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Extracting Insights from Google Play Reviews',
    description: 'Customers leave thousands of reviews on banking apps every month. Using NLP and Topic Modeling with LLMs, this project analyzes unstructured text to extract actionable insights on real-time issues affecting customer experience with banking apps in the UK market.',
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
    title: 'Predicting ans Simulating Churn for Telcos',
    description: 'A predictive modeling project that goes beyond simple classification. I built an interactive simulator that allows stakeholders to run "what-if" scenarios, visualizing the impact of specific retention actions on churn rates and calculating the potential ROI of intervention strategies.',
    tags: ['Predictive Modeling', 'Churn Analysis', 'What if Simulations'],
    imageUrl: '/images/telco.jpg',
    link: 'https://telcochurn-simulator.streamlit.app/'
  },
    {
    id: '4',
    title: 'AI Running Coach Connected to Strava',
    description: "An AI-powered running coach that connects with my Strava account, tracks my runs, gives me insights about my evolution and provides me with personalized tips to continue to improve my pace. It interacts with me via email and also generates a report in PowerBI.",
    tags: ['Workflow Automation', 'AI Agent', 'N8N', 'SQL'],
    imageUrl: '/images/running_coach.jpg',
    link: 'https://www.canva.com/design/DAG_4pui-3c/XGS0Agpa-nKebxMNCH0VQw/view?utm_content=DAG_4pui-3c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3b3329d370',
    ctaLabel: 'Learn More'
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
