import mobiles from '../../public/assets/images/Categories/phone.png';
import fashion from '../../public/assets/images/Categories/fashion.png';
import electronics from '../../public/assets/images/Categories/electronics.png';
import home from '../../public/assets/images/Categories/home.png';
import travel from '../../public/assets/images/Categories/travel.png';
import appliances from '../../public/assets/images/Categories/appliances.png';
import furniture from '../../public/assets/images/Categories/furniture.png';
import beauty from '../../public/assets/images/Categories/beauty.png';
import grocery from '../../public/assets/images/Categories/grocery.png';
import Link from 'next/link';
import Image from 'next/image';

interface Category {
  name: string;
  icon: any;
}

const catNav: Category[] = [
  {
    name: "Mobiles",
    icon: mobiles,
  },
  {
    name: "Fashion",
    icon: fashion,
  },
  {
    name: "Electronics",
    icon: electronics,
  },
  {
    name: "Home",
    icon: home,
  },
  {
    name: "Travel",
    icon: travel,
  },
  {
    name: "Appliances",
    icon: appliances,
  },
  {
    name: "Furniture",
    icon: furniture,
  },
  {
    name: "Beauty, Toys & more",
    icon: beauty,
  },
  {
    name: "Grocery",
    icon: grocery,
  },
];

const Categories: React.FC = () => {
  return (
    <section className="hidden sm:block bg-white mt-10 min-w-full px-12 py-1 shadow overflow-hidden mb-6">
      <div className="flex items-center justify-between mt-4">
        {catNav.map((item, i) => (
          <Link href='/' key={i} className="flex flex-col gap-1 items-center p-2 group">
              <div className="h-16 w-16">
                <Image draggable={false} className="h-full w-full object-contain" src={item.icon} alt={item.name} />
              </div>
              <span className="text-sm text-gray-800 font-medium group-hover:text-primary-blue">{item.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
