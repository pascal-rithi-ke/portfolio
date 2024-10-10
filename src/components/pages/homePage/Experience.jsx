// Experience.js
import React from 'react';
import LeftBlock from './experience/LeftBlock';
import RightBlock from './experience/RightBlock';

function Experience() {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      {/* La timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full bg-black w-[4px]"></div>
      
      {/* Contenu de la timeline */}
      <div className="w-full max-w-4xl flex flex-col items-center">
        <LeftBlock title="Project Inception" date="March 2023" description="Kickoff meeting and initial project planning phase completed." />
        <RightBlock title="Design Phase" date="April 2023" description="UI/UX designs finalized and approved by stakeholders." />
        <LeftBlock title="Development Starts" date="May 2023" description="Coding begins with frontend and backend teams working in parallel." />
        <RightBlock title="Alpha Testing" date="July 2023" description="Internal testing phase begins with early prototype." />
        <LeftBlock title="Beta Release" date="September 2023" description="Limited public beta launched for user feedback." />
        <RightBlock title="Final Launch" date="November 2023" description="Official product launch with marketing campaign." />
      </div>
    </div>
  );
}

export default Experience;
