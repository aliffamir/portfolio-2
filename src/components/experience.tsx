import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { ChevronDown } from 'lucide-react';

const items = [
  {
    id: '1',
    title: 'IT Developer Graduate',
    sub: 'RWE Supply & Trading GmbH',
    date: 'Incoming September 2025',
    content: [],
  },
  {
    id: '2',
    title: 'Junior API Developer',
    sub: 'Lancaster University',
    date: 'August 2024 - Present',
    content: [
      'Developed the Compassionate Schools Hub, a web application enabling over 700 schools across Lancashire to evaluate and support mental health practices to improve student and staff well-being.',
      'Designed and implemented GraphQL APIs with AWS AppSync and backend services using AWS Lambda for file processing, event-driven architectures with DynamoDB and S3, and automated email notifications using SES and Pinpoint.',
      'Built the AWS infrastructure with Terraform, deploying resources such as AppSync, Cognito, Cloudfront and DynamoDB.',
      'Implemented and maintained a continuous integration and continuous development pipeline streamlining deployments for staging and production environments, resulting in faster and more stable code releases.',
    ],
  },
  {
    id: '3',
    title: 'Software Engineer Intern',
    sub: 'Centre for Research in Data Science CeRDaS',
    date: 'June 2023 - September 2023',
    content: [
      "Developed full-stack web applications to deploy various machine learning pipelines for time series forecasting improving the clien's predictive maintenance systems and detection of operational risks.",
      'Containerised web applications using Docker, creating consistent development and testing environments, which significantly reduced environment setup time.',
      'Streamlined ML pipeline development using ClearML through experiment tracking, hyperparameter optimisation, and model and dataset versioning, significantly improving reproducibility and time to deployment.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <p className="self-start text-xl">Experience 💼</p>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&[data-state=open]>svg]:rotate-180">
                <span className="flex flex-col space-y-1">
                  <span>{item.title}</span>
                  {item.sub && <span className="text-sm font-normal">{item.sub}</span>}
                  {item.date && (
                    <span className="text-sm font-normal text-muted-foreground">{item.date}</span>
                  )}
                </span>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="pb-2">
              {item.content.length > 0 && (
                <ul className="list-disc space-y-2 pl-5">
                  {item.content.map((point, index) => (
                    <li key={index} className="text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
export default Experience;
