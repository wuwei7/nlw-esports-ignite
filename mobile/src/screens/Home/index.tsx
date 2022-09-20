import { Image, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('http://192.168.0.128:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image 
      source={logoImg}
      style={styles.logo}
      />

      <Heading 
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList 
      data={games}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <GameCard 
        data={item}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentList}
      />

    </SafeAreaView>
  )
}