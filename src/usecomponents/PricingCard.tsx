

import { Button } from '../components/ui/button';


const PricingCard = ({ plan, price, features, buttonLabel }:any) => {
  return (
    <div className="bg-neutral-100 dark:text-white dark:bg-slate-900 text-black p-6 rounded-lg border border-dark-300 w-full  ">
      <h3 className="text-xl font-semibold mb-4">{plan}</h3>
      <p className="text-4xl font-bold mb-4">{price}</p>
      <ul className="mb-6">
        {features.map((feature:string, index:number) => (
          <li key={index} className="mb-2 flex items-center">
            <span className="text-accent mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button className='border border-green-500 dark:bg-slate-900 bg-white text-black dark:text-white hover:bg-gray-200 hover:dark:bg-slate-800'>{buttonLabel}</Button>
    </div>
  );
};

export default PricingCard;
