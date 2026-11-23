import { CandidateApplication } from "@/components/candidate-application";
import { DifferenceBand } from "@/components/difference-band";
import { EmployerEnquiry } from "@/components/employer-enquiry";
import { Hero } from "@/components/hero";
import { IndustryList } from "@/components/industry-list";
import { RoleGallery } from "@/components/role-gallery";
import { ServiceList } from "@/components/service-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StaffingFaq } from "@/components/staffing-faq";

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div id="top">
        <SiteHeader />
        <main id="main">
          <Hero />
          <ServiceList />
          <DifferenceBand />
          <IndustryList />
          <RoleGallery />
          <EmployerEnquiry />
          <CandidateApplication />
          <StaffingFaq />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
