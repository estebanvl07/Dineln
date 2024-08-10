import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CustomIconsProps {
  size?: number;
  color?: string;
}

// {
//   size = 24,
//   color = "black"
// }

export const HomeIcon = ({ size = 24, color = "black" }: CustomIconsProps) => (
  <AntDesign name="home" size={size} color={color} />
);

export const SearchIcon = ({
  size = 24,
  color = "black",
}: CustomIconsProps) => <AntDesign name="search1" size={size} color={color} />;

export const MapIcon = ({ size = 22, color = "black" }: CustomIconsProps) => (
  <FontAwesome name="map-o" size={size} color={color} />
);

export const MarkerMapIcon = ({
  size = 24,
  color = "black",
}: CustomIconsProps) => <Ionicons name="location" size={24} color="black" />;
