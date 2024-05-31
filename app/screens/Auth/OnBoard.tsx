import React, { useContext, useRef } from "react";
// Importe les éléments nécessaires de la bibliothèque React
import { Dimensions, Image, StyleSheet, View } from "react-native";
// Importe les éléments nécessaires de la bibliothèque React Native
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
// Importe les éléments nécessaires de la bibliothèque React Native Reanimated
import Slide from "../../components/Auth/onBoardBlock/Slide";
// Importe le composant Slide depuis le fichier Slide.js
import Subslide from "../../components/Auth/onBoardBlock/Subslide";
// Importe le composant Subslide depuis le fichier Subslide.js
import Dot from "../../components/Auth/onBoardBlock/Dot";
import { type NavigationProp } from "@react-navigation/native";
import { type RootStackParamList } from "../../types";
import styles from "./OnBoardStyle.js";
import { ThemeContext } from "../../hooks/useColorScheme";
import { colors } from "../../config/styles/01-settings/_colors";

const slides = [
  // Définition des diapositives pour l'introduction
  {
    title: "Bienvenue",
    subtitle: "Où suis-je ?",
    description:
      "Bienvenue sur l'application de l'établissement Next-U, une plateforme dédiée exclusivement aux ambassadeurs !",
    color: "#327ded",
    picture: {
      uri: require("../../assets/images/on-board/illu1.png"),
      width: 150,
      height: 150,
      translateX: -70,
      translateY: 0,
    },
  },
  {
    title: "Objectif",
    subtitle: "Notre but",
    description:
      "Nous souhaitons révolutionner l'expérience des étudiants ambassadeurs ainsi que celle de la pédagogie.",
    color: "#4169e1",
    picture: {
      uri: require("../../assets/images/on-board/illu2.png"),
      width: 200,
      height: 200,
      translateX: -250,
      translateY: 0,
    },
  },
  {
    title: "Nous",
    subtitle: "Qui sommes-nous ?",
    description:
      "Nous sommes une équipe de développeurs passionnés, prêts à étendre nos connaissances.",
    color: "#1414e3",
    picture: {
      uri: require("../../assets/images/on-board/illu3.png"),
      width: 150,
      height: 150,
      translateX: -70,
      translateY: 0,
    },
  },
  {
    title: "Vous",
    subtitle: "Qui êtes-vous ?",
    description:
      "Vous êtes la future équipe d'ambassadeurs de l'école. À vous de faire rayonner les couleurs de votre école !",
    color: "#0202b0",
    picture: {
      uri: require("../../assets/images/on-board/illu4.png"),
      width: 200,
      height: 200,
      translateX: -260,
      translateY: 0,
    },
  },
];

export const assets = slides.map((slide) => slide.picture.uri);
// Crée un tableau contenant les URI des images utilisées dans les diapositives

export default function OnBoard({
  navigation,
}: {
  navigation: NavigationProp<RootStackParamList, "OnBoard">;
}): React.JSX.Element {
  const colorTheme = useContext(ThemeContext);

  // Composant principal OnBoard, prenant la navigation comme argument
  const { width } = Dimensions.get("window");
  const BORDER_RADIUS = 75; // Définit la constante BORDER_RADIUS avec une valeur de 75
  const scrollRef = useRef<Animated.ScrollView>(null);

  // Crée une référence à un ScrollView animé
  const x = useSharedValue(0);

  // Crée une valeur partagée animée initialisée à 0
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });
  // Crée un gestionnaire de défilement animé qui met à jour la valeur partagée animée x lors du défilement

  const backgroundColor = useDerivedValue(() =>
    interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map((slide) => slide.color)
    )
  );
  // Crée une valeur dérivée animée pour la couleur de fond en interpolant la couleur en fonction de la valeur de x

  const slider = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  // Crée un style animé pour le composant de diapositives en utilisant la couleur de fond animée

  const background = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  // Crée un style animé pour l'arrière-plan en utilisant la couleur de fond animée

  const currentIndex = useDerivedValue(() => x.value / width);
  // Crée une valeur dérivée animée pour l'index de la diapositive actuelle en fonction de la valeur de x

  const footerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -x.value }],
  }));
  // Crée un style animé pour le pied de page en utilisant la valeur de x pour déplacer horizontalement le contenu

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            colorTheme?.isDark ?? false ? colors.backgroundDark : colors.backgroundDefault,
        },
      ]}
    >
      {/* // Conteneur principal de la vue */}
      <Animated.View
        style={[
          styles.slider,
          slider,
          useAnimatedStyle(() => {
            const borderBottomRadius = interpolate(
              x.value,
              slides.map((_, i) => i * width),
              slides.map((_, i) => (i === slides.length - 1 ? 0 : BORDER_RADIUS)),
              Extrapolate.CLAMP
            );
            return {
              borderBottomRightRadius: borderBottomRadius,
            };
          }),
        ]}
      >
        {/* // Vue animée pour les diapositives */}
        {slides.map(({ picture }, i) => {
          const style = useAnimatedStyle(() => ({
            opacity: interpolate(
              x.value,
              [(i - 0.5) * width, i * width, (i + 0.5) * width],
              [0, 1, 0],
              Extrapolate.CLAMP
            ),
          }));
          // Style animé pour l'opacité de chaque diapositive

          return (
            <Animated.View style={[styles.underlay, style]} key={i}>
              <Image
                source={picture.uri}
                style={{
                  width: width - picture.width,
                  height: (width - picture.height) * (picture.height / picture.width),
                  resizeMode: "contain",
                  transform: [
                    { translateX: picture.width + picture.translateX },
                    { translateY: picture.translateY },
                  ],
                }}
              />
            </Animated.View>
          );
        })}
        {/* // Affiche chaque diapositive avec l'image correspondante */}
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          bounces={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {/* // ScrollView animé pour afficher les diapositives horizontalement */}
          {slides.map((slide, i) => (
            <Slide key={i} title={slide.title} right={!(i % 2 === 0)} />
          ))}
          {/* // Affiche chaque diapositive avec le titre correspondant */}
        </Animated.ScrollView>
      </Animated.View>
      {/* // Fin de la vue animée pour les diapositives */}
      <View style={styles.footer}>
        {/* // Pied de page */}
        <Animated.View style={[StyleSheet.absoluteFill, background]} />
        {/* // Vue animée pour l'arrière-plan */}
        <Animated.View
          style={[
            styles.footerContent,
            {
              backgroundColor:
                colorTheme?.isDark ?? false ? colors.backgroundDark : colors.backgroundDefault,
            },
            useAnimatedStyle(() => {
              const borderTopRadius = interpolate(
                x.value,
                slides.map((_, i) => i * width),
                slides.map((_, i) => (i === 0 ? 0 : BORDER_RADIUS)),
                Extrapolate.CLAMP
              );
              return {
                borderTopLeftRadius: borderTopRadius,
              };
            }),
          ]}
        >
          {/* // Vue animée pour le contenu du pied de page */}
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} {...{ index }} currentIndex={currentIndex} />
            ))}
          </View>
          {/* // Affiche les indicateurs de pagination */}
          <Animated.View
            style={[
              {
                flex: 1,
                flexDirection: "row",
                width: width * slides.length,
              },
              footerStyle,
            ]}
          >
            {/* // Vue animée pour le contenu des sous-diapositives */}
            {slides.map(({ subtitle, description }, i) => {
              const last = i === slides.length - 1;
              return (
                <Subslide
                  key={i}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("LogIn");
                    } else {
                      scrollRef.current?.scrollTo({
                        x: width * (i + 1),
                        animated: true,
                      });
                    }
                  }}
                  {...{ subtitle, description, last }}
                />
              );
            })}
            {/* // Affiche chaque sous-diapositive avec le sous-titre et la */}
            {/* description correspondants */}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}
