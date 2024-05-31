import { Animated } from "react-native";

export const startShakeAnimation = (
  shakeAnimation: Animated.Value,
  enableLoop: boolean = false,
  customDuration: number = 100 // Default duration is set to 100 if not provided
) => {
  const shakeSequence = Animated.sequence([
    Animated.timing(shakeAnimation, {
      toValue: 10,
      duration: customDuration,
      useNativeDriver: false,
    }),
    Animated.timing(shakeAnimation, {
      toValue: -10,
      duration: customDuration,
      useNativeDriver: false,
    }),
    Animated.timing(shakeAnimation, {
      toValue: 10,
      duration: customDuration,
      useNativeDriver: false,
    }),
    Animated.timing(shakeAnimation, {
      toValue: -10,
      duration: customDuration,
      useNativeDriver: false,
    }),
    Animated.timing(shakeAnimation, {
      toValue: 10,
      duration: customDuration,
      useNativeDriver: false,
    }),
    Animated.timing(shakeAnimation, {
      toValue: 0,
      duration: customDuration,
      useNativeDriver: false,
    }),
  ]);

  if (enableLoop) {
    // Loop if needed
    const shakeLoop = Animated.loop(shakeSequence);
    shakeLoop.start();
  } else {
    // If the loop is not activated, play the sequence only once
    shakeSequence.start();
  }
};

export const startBlinkAnimation = (blinkAnimation: Animated.Value, minValue: number = 0) => {
  const duration = 600;
  Animated.loop(
    Animated.sequence([
      Animated.timing(blinkAnimation, {
        toValue: 1,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(blinkAnimation, {
        toValue: minValue,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(blinkAnimation, {
        toValue: 1,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(blinkAnimation, {
        toValue: minValue,
        duration,
        useNativeDriver: false,
      }),
    ])
  ).start();
};

export const startGlowAnimation = (glowAnimation: Animated.Value) => {
  const duration = 1000;
  const delay = Math.random() * 2000;
  Animated.delay(delay).start(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnimation, {
          toValue: 5, // Augmente l'opacité à 1
          duration,
          useNativeDriver: false,
        }),
        Animated.timing(glowAnimation, {
          toValue: 0, // Réduit l'opacité à 0
          duration,
          useNativeDriver: false,
        }),
      ])
    ).start();
  });
};

export const startBounceAnimation = (
  bounceAnimation: Animated.Value,
  enableLoop: boolean = false,
  customDuration: number = 100 // Default duration is set to 100 if not provided
) => {
  const bounceSequence = Animated.sequence([
    Animated.timing(bounceAnimation, {
      toValue: 0.9,
      duration: customDuration,
      useNativeDriver: false,
    }),
    Animated.timing(bounceAnimation, {
      toValue: 1.1,
      duration: customDuration,
      useNativeDriver: false,
    }),
    Animated.timing(bounceAnimation, {
      toValue: 0.95,
      duration: customDuration,
      useNativeDriver: false,
    }),
    Animated.timing(bounceAnimation, {
      toValue: 1.05,
      duration: customDuration,
      useNativeDriver: false,
    }),
    Animated.timing(bounceAnimation, {
      toValue: 1,
      duration: customDuration,
      useNativeDriver: false,
    }),
  ]);

  if (enableLoop) {
    // Loop if needed
    const shakeLoop = Animated.loop(bounceSequence);
    shakeLoop.start();
  } else {
    // If the loop is not activated, play the sequence only once
    bounceSequence.start();
  }
};
