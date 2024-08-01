import InsurancesAccepted from "../../InsurancesAccepted"

export const metadata = {
        metadataBase: new URL('https://intracoastal-dermatology.com'),
        title: "Insurances Accepted - Intracoastal Dermatology and Skin Surgery",
        description: "Intracoastal Dermatology accepts a wide range of insurance plans to ensure that our services are accessible to as many patients as possible.",
        url: "https://intracoastal-dermatology.com/insurances-accepted",
        canonical: "https://intracoastal-dermatology.com/insurances-accepted",
        openGraph: {
          title: "Insurances Accepted - Intracoastal Dermatology and Skin Surgery",
          description: "Intracoastal Dermatology accepts a wide range of insurance plans to ensure that our services are accessible to as many patients as possible.",
          url: "https://intracoastal-dermatology.com/insurances-accepted",
          type: "website",
          locale: "en_US",
          site_name: "Intracoastal Dermatology and Skin Surgery",
          images: [
            {
              url: "https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryLogo.png",
              width: 800,
              height: 600,
              alt: "Intracoastal Dermatology and Skin Surgery Logo",
            },
          ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Insurances Accepted - Intracoastal Dermatology and Skin Surgery",
            description: "Intracoastal Dermatology accepts a wide range of insurance plans to ensure that our services are accessible to as many patients as possible.",
            images: ['https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryLogo.png'],
          },
}
export default function InsurancesAcceptedPage() {

    return (
        <main>
            <InsurancesAccepted />
        </main>
    )
}