
import PricingCard from '../usecomponents/PricingCard';
import Navbar from '../usecomponents/Navbar';
import Footer from '../usecomponents/Footer';

const plans = [
  {
    plan: 'Free Plan',
    price: '$0 /month',
    features: [
      '0.5 GiB storage',
      '24/7 for your main database',
      'Community support',
      'Fixed capacity at 0.25 vCPU',
      'Point-in-time restore (24 h)',
      'Organization accounts',
      'IP Allow rules',
    ],
    buttonLabel: 'Start for free',
  },
  {
    plan: 'Launch',
    price: 'From $19 /month',
    features: [
      '10 GiB storage included',
      '300 compute hours included',
      'Standard support',
      'Autoscaling up to 4 CU',
      'Point-in-time restore (7 days)',
      'Organization accounts',
      'IP Allow rules',
    ],
    buttonLabel: 'Get started',
  },
  {
    plan: 'Scale',
    price: 'From $69 /month',
    features: [
      '50 GiB storage included',
      '750 compute hours included',
      'Priority support',
      'Autoscaling up to 10 CU',
      'Point-in-time restore (30 days)',
      'Organization accounts',
      'IP Allow rules',
    ],
    buttonLabel: 'Get started',
  },
  {
    plan: 'Enterprise',
    price: 'Custom',
    features: [
      'Higher resource limits',
      'Thousands of projects',
      '99.95% SLA',
      '24x7 customer support',
      'Dedicated Slack channel',
    ],
    buttonLabel: 'Request trial',
  },
];

const Pricing = () => {
  return (
    <><Navbar></Navbar>
    <div className="min-h-screen pt-10   text-black dark:text-white container">
      <header className="py-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Neon Pricing</h1>
        <p className="text-xl">Start free, launch with predictable costs, and scale efficiently.</p>
      </header>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </section>
    </div>
    <div className='mt-44'>
    <Footer></Footer>

    </div>
    
    </>
  );
};

export default Pricing;
