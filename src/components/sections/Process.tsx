import { ClipboardCheck, Users, FileText, HardHat, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Free Estimate',
    description: 'We visit your home, discuss your vision, and take measurements.',
  },
  {
    icon: Users,
    title: 'Project Walkthrough',
    description: 'Review materials, timeline, and answer all your questions.',
  },
  {
    icon: FileText,
    title: 'Detailed Quote',
    description: 'Receive a clear, itemized quote with no hidden fees.',
  },
  {
    icon: HardHat,
    title: 'Expert Build',
    description: 'Our skilled team brings your vision to life with precision.',
  },
  {
    icon: CheckCircle,
    title: 'Final Walkthrough',
    description: 'Inspect the work together and ensure your complete satisfaction.',
  },
];

export function Process() {
  return (
    <section className="section-padding bg-stone-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Our Simple Process
          </h2>
          <p className="text-muted-foreground text-lg">
            From first call to final walkthrough, we make your project stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number & Icon */}
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto relative z-10">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
