import ServiceDetailPage from '../../../../ServiceDetailPage';
import servicesData from "../../../../servicesData.json";
import slugify from "../../../../slugify";


export default function SurgicalServicePage({ params }) {
    const { service } = params;
    const categoryServices = servicesData.surgical || [];
    const serviceData = categoryServices.find(s => slugify(s.name) === service);

  
    return <ServiceDetailPage category='surgical' serviceName={service} serviceData={serviceData} />;
  }
  
  export async function generateStaticParams() {
    const surgicalServices = servicesData.surgical || [];
    return surgicalServices.map((service) => ({
      service: slugify(service.name)
    }));
  }
export async function generateMetadata({ params }) {
  const { service: serviceName } = params;
  const category = 'surgical';
  
  const categoryServices = servicesData[category] || [];
  const service = categoryServices.find(s => slugify(s.name) === serviceName);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  const title = `${service.name} | Surgical Services | Intracoastal Dermatology and Skin Surgery`;
  const description = service.shortDescription || service.description;
  const url = `https://yourwebsite.com/services/cosmetic/${slugify(service.name)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url,
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    canonical: url,
  };
}