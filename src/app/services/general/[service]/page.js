import ServiceDetailPage from '../../../../ServiceDetailPage';
import servicesData from "../../../../servicesData.json";
import slugify from "../../../../slugify";
import { notFound } from 'next/navigation';

export default function GeneralServicePage({ params }) {
    const { service } = params;
    const categoryServices = servicesData.general || [];
    const serviceData = categoryServices.find(s => slugify(s.name) === service);
  
    if (!serviceData) {
      notFound();
    }
  
    return <ServiceDetailPage category='general' serviceName={service} serviceData={serviceData} />;
  }
  
  export async function generateStaticParams() {
    const generalServices = servicesData.general || [];
    return generalServices.map((service) => ({
      service: slugify(service.name)
    }));
  }
export async function generateMetadata({ params }) {
  const { service: serviceName } = params;
  const category = 'general';
  
  const categoryServices = servicesData[category] || [];
  const service = categoryServices.find(s => slugify(s.name) === serviceName);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  const title = `${service.name} | Cosmetic Services | Your Company Name`;
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
    // Additional metadata tags
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    canonical: url,
  };
}