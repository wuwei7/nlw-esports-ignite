import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { View, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { GameParams } from "../../@types/navigation";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";
import { THEME } from "../../theme";

export function Game() {

  const route = useRoute();
  const game = route.params as GameParams;

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Entypo 
            name="chevron-thin-left"
            color={THEME.COLORS.CAPTION_300}
            size={20}
          />
        </TouchableOpacity>

        <Image 
          source={logoImg}
          style={styles.logo}
        />
        {/* Essa View fica do lado direito e, com isso, centraliza o logo. */}
        <View style={styles.right} />

      </View>

      <Heading 
        title={game.title}
        subtitle="Conecte-se e comece a jogar!"
      />

    </SafeAreaView>
    </Background>
  );
}