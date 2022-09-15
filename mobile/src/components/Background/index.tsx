import { ImageBackground } from "react-native";
import backgroundImg from '../../assets/background-galaxy.png';
import { styles } from "./styles";

interface Props {
  children: React.ReactNode;
}

// A propriedade children traz o conteúdo de <Background> em App().
export function Background({children}: Props) {
  return (
    <ImageBackground source={backgroundImg} defaultSource={backgroundImg} 
    style={styles.container}>
      {children}
    </ImageBackground>
  )
}