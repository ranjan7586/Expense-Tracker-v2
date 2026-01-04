import { type JSX } from "react";
import {
  DollarSign,
  ShoppingCart,
  Car,
  Gamepad2,
  Home as HomeIcon,
  Zap,
  Gift,
  Utensils,
  Carrot,
  Clapperboard,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, JSX.Element> = {
  income: <DollarSign className="w-4 h-4" />,
  food: <Utensils className="w-4 h-4" />,
  grocery: <Carrot className="w-4 h-4" />,
  transport: <Car className="w-4 h-4" />,
  transportation: <Car className="w-4 h-4" />,
  entertainment: <Gamepad2 className="w-4 h-4" />,
  shopping: <ShoppingCart className="w-4 h-4" />,
  utilities: <Zap className="w-4 h-4" />,
  rent: <HomeIcon className="w-4 h-4" />,
  gift: <Gift className="w-4 h-4" />,
  music: <Clapperboard className="w-4 h-4" />,
  default: <DollarSign className="w-4 h-4" />,
};

const CATEGORY_COLORS: Record<string, string> = {
  income: "bg-green-100 text-green-600",
  food: "bg-orange-100 text-orange-600",
  transport: "bg-blue-100 text-blue-600",
  entertainment: "bg-purple-100 text-purple-600",
  default: "bg-gray-100 text-gray-600",
};

export const getCategoryDisplay = (type?: string) => {
  const lowerType = type?.toLowerCase() || 'default';

  const iconKey = Object.keys(CATEGORY_ICONS).find((k) => lowerType.includes(k)) || 'default';
  const colorKey = Object.keys(CATEGORY_COLORS).find((k) => lowerType.includes(k)) || 'default';

  return {
    icon: CATEGORY_ICONS[iconKey],
    colors: CATEGORY_COLORS[colorKey],
  };
};
