
import teeHard from '../assets/images/storePage/clothes/футболка жоская.png';
import teeExtremelyHard from '../assets/images/storePage/clothes/футболка-крайне-жоская.png';
import hoodieTop from '../assets/images/storePage/clothes/худи-экстра-топ.png';

export interface Product {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
    description?: string;
    images: string[];
}

export const PRODUCTS: Product[] = [
    // Apparel (4epuha)
    {
        id: 1,
        name: '4epuha "Zhostkaya" Tee',
        category: 'Apparel',
        price: '$59.99',
        image: teeHard,
        description: "The original 4epuha tee. Made from 100% organic cotton, this t-shirt defines comfort and style. Perfect for long gaming sessions or casual outings.",
        images: [teeHard]
    },
    {
        id: 5,
        name: '4epuha "Extra Top" Hoodie',
        category: 'Apparel',
        price: '$79.99',
        image: hoodieTop,
        description: "Stay warm and stylish with the Extra Top Hoodie. Featuring a premium fleece lining and a modern oversized fit.",
        images: [hoodieTop]
    },
    {
        id: 7,
        name: '4epuha Elite Jersey',
        category: 'Apparel',
        price: '$64.99',
        image: teeExtremelyHard,
        description: "Performance meets style. This breathable jersey is designed for esports athletes who demand the best.",
        images: [teeExtremelyHard]
    },
    {
        id: 8,
        name: '4epuha Founder Cap',
        category: 'Apparel',
        price: '$24.99',
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop',
        description: "Classic snapback with the iconic 4epuha logo. Adjustable strap for a perfect fit.",
        images: ['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop']
    },
    {
        id: 9,
        name: '4epuha Tech Windbreaker',
        category: 'Apparel',
        price: '$89.99',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop',
        description: "Lightweight, water-resistant, and ready for any weather. The Tech Windbreaker is your go-to outer layer.",
        images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop']
    },

    // Devices
    {
        id: 2,
        name: 'Pro Mechanical Keyboard',
        category: 'Devices',
        price: '$129.99',
        image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=600&auto=format&fit=crop',
        description: "Tactile switches, RGB lighting, and an aircraft-grade aluminum frame. The ultimate tool for gamers.",
        images: ['https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=600&auto=format&fit=crop']
    },
    {
        id: 3,
        name: 'Neural Precision Mouse',
        category: 'Devices',
        price: '$79.99',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop',
        description: "Ultra-lightweight design with a 25K DPI sensor. Pinpoint accuracy for every shot.",
        images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop']
    },
    {
        id: 6,
        name: 'Carbon Fiber Headset',
        category: 'Devices',
        price: '$149.99',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
        description: "Immersive 7.1 surround sound with noise-canceling microphone. Hear everything, miss nothing.",
        images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop']
    },
    {
        id: 10,
        name: 'Streamer 4K Webcam',
        category: 'Devices',
        price: '$99.99',
        image: 'https://images.unsplash.com/photo-1588591795084-1770cb3be374?q=80&w=600&auto=format&fit=crop',
        description: "Broadcast in stunning 4K clarity. Auto-focus and low-light correction included.",
        images: ['https://images.unsplash.com/photo-1588591795084-1770cb3be374?q=80&w=600&auto=format&fit=crop']
    },
    {
        id: 11,
        name: 'Wireless Studio Mic',
        category: 'Devices',
        price: '$179.99',
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop',
        description: "Studio-quality audio without the wires. Crystal clear voice capture for streaming and recording.",
        images: ['https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop']
    },

    // Accessories
    {
        id: 4,
        name: 'Stellar RGB Mousepad',
        category: 'Accessories',
        price: '$34.99',
        image: 'https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "Oversized mousepad with customizable RGB edges. Smooth surface for speed and control.",
        images: ['https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
    },
    {
        id: 12,
        name: 'Cable Management Pro',
        category: 'Accessories',
        price: '$19.99',
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=600&auto=format&fit=crop',
        description: "Keep your setup clean and organized with our premium cable management kit.",
        images: ['https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=600&auto=format&fit=crop']
    },
    {
        id: 13,
        name: 'Dual Controller Stand',
        category: 'Accessories',
        price: '$29.99',
        image: 'https://media.invisioncic.com/r322239/monthly_04_2013/post-5654-0-15440400-1365369912.jpg',
        description: "Display your controllers in style. Universal fit for all major console controllers.",
        images: ['https://media.invisioncic.com/r322239/monthly_04_2013/post-5654-0-15440400-1365369912.jpg']
    },
    {
        id: 14,
        name: 'Blue Light Glasses',
        category: 'Accessories',
        price: '$39.99',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop',
        description: "Protect your eyes during long gaming sessions. Reduces eye strain and fatigue.",
        images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop']
    },
    {
        id: 15,
        name: 'Custom Artisan Keycaps',
        category: 'Accessories',
        price: '$44.99',
        image: 'https://images.unsplash.com/photo-1598662779094-110c2bad80b5?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: "Hand-crafted resin keycaps to make your keyboard truly unique.",
        images: ['https://images.unsplash.com/photo-1598662779094-110c2bad80b5?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
    },
    // New Arrivals mapped to main list for now if needed, or we can just query by ID
    {
        id: 101,
        name: '4epuha Pro Jersey',
        category: 'Apparel',
        price: '$49.99',
        image: teeExtremelyHard,
        description: "The official pro jersey of team 4epuha. Lightweight and breathable.",
        images: [teeExtremelyHard]
    },
    {
        id: 102,
        name: 'Obsidian MK-II Keyboard',
        category: 'Devices',
        price: '$159.99',
        image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop',
        description: "The successor to the legendary Obsidian. Faster, quieter, and more durable.",
        images: ['https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop']
    },
    {
        id: 103,
        name: 'Acoustic Elite Headset',
        category: 'Devices',
        price: '$199.99',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop',
        description: "Audiophile-grade sound for the discerning gamer.",
        images: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop']
    },
    {
        id: 104,
        name: 'Neon Glow Mousepad',
        category: 'Accessories',
        price: '$39.99',
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop',
        description: "Light up your desk with the Neon Glow Mousepad. 10 vivid lighting zones.",
        images: ['https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop']
    },
];

export const CATEGORIES = [
    { id: 1, title: 'Apparel', description: 'Premium 4epuha hoodies & tees', image: '👕' },
    { id: 2, title: 'Accessories', description: 'Epic gaming gear extras', image: '🎮' },
    { id: 3, title: 'Devices', description: 'High-performance hardware', image: '⌨️' },
];
