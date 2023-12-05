import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card2 title="Collected" value={totalPaidInvoices} type="collected" />
      <Card2 title="Pending" value={totalPendingInvoices} type="pending" />
      <Card2 title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card2
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card2({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'Scheduled' | 'Out for shipment' | 'Pending' | 'Total Orders';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
