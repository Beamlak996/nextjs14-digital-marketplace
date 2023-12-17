import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranted Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural enviroment.",
  },
];

export const PerkInfo = () => {
  return (
    <>
      {perks.map((perk) => (
        <div
          key={perk.name}
          className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
        >
          <div className="md:flex-shrink-0 flex justify-center">
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
              {<perk.Icon className="w-1/3 h-1/3" />}
            </div>
          </div>
          <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
            <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
            <p className="mt-6 text-sm text-muted-foreground">
              {perk.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
