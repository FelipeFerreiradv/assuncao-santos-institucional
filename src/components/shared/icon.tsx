import {
  Building2,
  Clock,
  Compass,
  Eye,
  Gem,
  GraduationCap,
  Handshake,
  HeartHandshake,
  HelpCircle,
  Landmark,
  MapPin,
  MessageCircle,
  Route,
  Scale,
  Search,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** Mapa nome → ícone lucide, usado pelos dados em content/*. */
export const ICONS: Record<string, LucideIcon> = {
  Building2,
  Clock,
  Compass,
  Eye,
  Gem,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Landmark,
  MapPin,
  MessageCircle,
  Route,
  Scale,
  Search,
  ShieldCheck,
  Target,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Component = ICONS[name] ?? HelpCircle;
  return <Component aria-hidden strokeWidth={strokeWidth} className={cn(className)} />;
}
