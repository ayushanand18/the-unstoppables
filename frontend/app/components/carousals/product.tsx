import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductProps {
    image: string;
    name: string;
    offer: string;
    tag: string;
}

const Product: React.FC<ProductProps> = ({ image, name, offer, tag }) => {
    return (
        <Link href="/products" passHref className="flex flex-col items-center gap-1.5 p-6 cursor-pointer">
                <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-150 ease-out width-['60px']">
                    <Image draggable={false} className="w-full h-full object-contain" src={image} alt={name} width={200} height={200}/>
                </div>
                <h2 className="font-medium text-sm mt-2">{name}</h2>
                <span className="text-primary-green text-sm">{offer}</span>
                <span className="text-gray-500 text-sm">{tag}</span>
        </Link>
    );
};

export default Product;
