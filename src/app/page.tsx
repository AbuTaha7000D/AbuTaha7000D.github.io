import React from 'react';
import { Navbar } from '@/components/Navbar';
import { SectionProgressRail } from '@/components/SectionProgressRail';
import { HeroPipeline } from '@/components/HeroPipeline';
import { AboutSqlQuery } from '@/components/AboutSqlQuery';
import { StackArchitectureMap } from '@/components/StackArchitectureMap';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSystemLog } from '@/components/ExperienceSystemLog';
import { LeadershipSection } from '@/components/LeadershipSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactApiRequest } from '@/components/ContactApiRequest';
import { Footer } from '@/components/Footer';
import { SectionNavigationProvider } from '@/components/SectionNavigationProvider';

export default function Home() {
	return (
		<SectionNavigationProvider>
			<Navbar />
			<SectionProgressRail />

			<main id="main-content" className="relative min-h-screen bg-surface text-primary">
				<HeroPipeline />
				<AboutSqlQuery />
				<ExperienceSystemLog />
				<StackArchitectureMap />
				<ProjectsSection />
				<EducationSection />
				<LeadershipSection />
				<ContactApiRequest />
			</main>

			<Footer />
		</SectionNavigationProvider>
	);
}
