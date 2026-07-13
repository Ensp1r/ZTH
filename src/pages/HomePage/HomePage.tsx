import { EcosystemSection, Footer, HeroSection, MentalSupportSection } from "../../components/layouts"



export const HomePage = () => {
    return (
        <>
            <main>
                <HeroSection />
                <EcosystemSection />
                <MentalSupportSection />
            </main>
            <Footer />
        </>
    )
}