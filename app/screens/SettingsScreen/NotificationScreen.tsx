import React, { useContext, useEffect, useState } from "react";
import { Alert, Platform, ScrollView, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "../../components/Themed";
import { ThemeContext } from "../../hooks/useColorScheme";
import { colors } from "../../config/styles/01-settings/_colors";
import styles from "./NotificationScreenStyle.js";

export default function NotificationScreen(): React.JSX.Element {
  const userInfos = useSelector((state: RootState) => state.userInfos);
  const themeColor = useContext(ThemeContext);

  const [mainswitchValue, setMainSwitchValue] = useState(false);
  const [eventHourswitchValue, setEventHourSwitchValue] = useState<boolean>(
    userInfos?.params?.notifications?.schedule_event ?? false
  );
  const [eventNewswitchValue, setEventNewSwitchValue] = useState<boolean>(
    userInfos?.params?.notifications?.new_event ?? false
  );
  const [levelswitchValue, setLevelSwitchValue] = useState<boolean>(
    userInfos?.params?.notifications?.ranking ?? false
  );
  const [goalswitchValue, setGoalSwitchValue] = useState<boolean>(
    userInfos?.params?.notifications?.goal ?? false
  );
  const [participationSwitchValue, setParticipationSwitchValue] = useState<boolean>(
    userInfos?.params?.notifications?.participation_event ?? false
  );
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isSaved, setIsSaved] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const everySwitchEnabled =
      eventHourswitchValue &&
      eventNewswitchValue &&
      levelswitchValue &&
      goalswitchValue &&
      participationSwitchValue;

    const newNotificationParams = {
      participation_event: participationSwitchValue,
      schedule_event: eventHourswitchValue,
      new_event: eventNewswitchValue,
      ranking: levelswitchValue,
      goal: goalswitchValue,
    };

    if (!isFirstLoad) {
      setIsSaved(false);
      void putAPI({
        objectType: "users",
        idToModify: userInfos._id + "/params",
        dataToTransfert: newNotificationParams,
      }).then((resp) => {
        if (resp) {
          setIsSaved(true);
          // ENREGISTRER EN LOCAL
          dispatch(
            updateUserWithLocalStorage({
              params: {
                ...userInfos.params,
                notifications: newNotificationParams,
              },
            })
          );
        } else {
          setIsSaved(false);
          Alert.alert(
            "Erreur d'enregistrement",
            "Une erreur est survenue lors de l'enregistrement des données, veuillez quitter cette page et la recharger puis reessayer, si l'erreur perciste veuillez nous en informer."
          );
        }
      });
    } else setIsFirstLoad(false);

    // putAPI
    setMainSwitchValue(everySwitchEnabled);
  }, [
    eventHourswitchValue,
    eventNewswitchValue,
    levelswitchValue,
    goalswitchValue,
    participationSwitchValue,
    participationSwitchValue,
  ]);
  // putAPI

  const toggleMainSwitch = (): void => {
    setEventHourSwitchValue(!mainswitchValue);
    setEventNewSwitchValue(!mainswitchValue);
    setLevelSwitchValue(!mainswitchValue);
    setGoalSwitchValue(!mainswitchValue);
    setParticipationSwitchValue(!mainswitchValue);
    setMainSwitchValue((previousState) => !previousState);
  };

  // === Couleur du switch principa ==== //
  // Couleur de la poignée activer
  const secondthumbColorOn = Platform.OS === "android" ? "#33b16b" : undefined;
  // Couleur de la poignée desactiver
  const secondthumbColorOff = Platform.OS === "android" ? "#616161" : undefined;
  // Couleur du tracé derrière la poignée activer
  const secondtrackColorOn = Platform.OS === "android" ? "#3DDC84" : undefined;
  // Couleur du tracé derrière la poignée desactiver
  const secondtrackColorOff = Platform.OS === "android" ? "#808080" : undefined;

  const styleDynamic = {
    container: {
      backgroundColor:
        themeColor?.isDark ?? false ? colors.backgroundDark : colors.backgroundDefault,
    },
    icon_color: { color: themeColor?.isDark ?? false ? colors.gray300 : colors.black },
  };

  return (
    <ScrollView
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
      style={[styles.container, styleDynamic.container]}
    >
      <SafeAreaView edges={["left", "right"]}>
        <View style={styles.notifForm}>
          <View style={styles.horizontalSection}>
            <View style={styles.contentSection}>
              <View style={styles.icon}>
                <Feather
                  name={mainswitchValue ? "bell" : "bell-off"}
                  size={30}
                  style={[styleDynamic.icon_color]}
                />
              </View>
              <View style={styles.textSection}>
                <Text style={styles.title} lightColor={colors.black} darkColor={colors.gray300}>
                  {mainswitchValue
                    ? "Norifications activées"
                    : eventHourswitchValue ||
                      eventNewswitchValue ||
                      levelswitchValue ||
                      goalswitchValue ||
                      participationSwitchValue
                    ? "Notifications personalisées"
                    : "Notifications désactivées"}
                </Text>
              </View>
            </View>
            <Switch
              onValueChange={toggleMainSwitch}
              value={mainswitchValue}
              thumbColor={mainswitchValue ? secondthumbColorOn : secondthumbColorOff}
              trackColor={{
                false: secondtrackColorOff,
                true: secondtrackColorOn,
              }}
              ios_backgroundColor={secondtrackColorOff}
              disabled={!isSaved}
            />
          </View>
          <View style={styles.line} darkColor={colors.gray300} lightColor={colors.black}></View>
          <View style={styles.horizontalSection}>
            <View style={styles.contentSection}>
              <View style={styles.icon}>
                <Feather name="clock" size={30} style={[styleDynamic.icon_color]} />
              </View>
              <View style={styles.textSection}>
                <Text style={styles.title} lightColor={colors.black} darkColor={colors.gray300}>
                  Horaires évènement
                </Text>

                <Text style={styles.subtitle} lightColor={colors.gray500} darkColor={colors.gray0}>
                  Notifie des informations relatives aux horaires d&apos;évènements
                </Text>
              </View>
            </View>
            <Switch
              onValueChange={setEventHourSwitchValue}
              value={eventHourswitchValue}
              thumbColor={eventHourswitchValue ? secondthumbColorOn : secondthumbColorOff}
              trackColor={{
                false: secondtrackColorOff,
                true: secondtrackColorOn,
              }}
              ios_backgroundColor={secondtrackColorOff}
              disabled={!isSaved}
            />
          </View>
          <View style={[styles.line]} darkColor={colors.gray300} lightColor={colors.black}></View>
          <View style={styles.horizontalSection}>
            <View style={styles.contentSection}>
              <View style={styles.icon}>
                <Feather name="calendar" size={30} style={[styleDynamic.icon_color]} />
              </View>
              <View style={styles.textSection}>
                <Text style={styles.title} lightColor={colors.black} darkColor={colors.gray300}>
                  Nouveaux évènements
                </Text>

                <Text style={styles.subtitle} lightColor={colors.gray500} darkColor={colors.gray0}>
                  Notifie des annonces de nouveaux évènements dans l&apos;agenda
                </Text>
              </View>
            </View>
            <Switch
              onValueChange={setEventNewSwitchValue}
              value={eventNewswitchValue}
              thumbColor={eventNewswitchValue ? secondthumbColorOn : secondthumbColorOff}
              trackColor={{
                false: secondtrackColorOff,
                true: secondtrackColorOn,
              }}
              ios_backgroundColor={secondtrackColorOff}
              disabled={!isSaved}
            />
          </View>
          <View style={[styles.line]} darkColor={colors.gray300} lightColor={colors.black}></View>
          <View style={styles.horizontalSection}>
            <View style={styles.contentSection}>
              <View style={styles.icon}>
                <Feather name="trending-up" size={30} style={[styleDynamic.icon_color]} />
              </View>
              <View style={styles.textSection}>
                <Text style={styles.title} lightColor={colors.black} darkColor={colors.gray300}>
                  Niveau Ambassador
                </Text>

                <Text style={styles.subtitle} lightColor={colors.gray500} darkColor={colors.gray0}>
                  Notifie des alertes de passage de niveau et du classement
                </Text>
              </View>
            </View>
            <Switch
              onValueChange={setLevelSwitchValue}
              value={levelswitchValue}
              thumbColor={levelswitchValue ? secondthumbColorOn : secondthumbColorOff}
              trackColor={{
                false: secondtrackColorOff,
                true: secondtrackColorOn,
              }}
              ios_backgroundColor={secondtrackColorOff}
              disabled={!isSaved}
            />
          </View>
          <View style={styles.line} darkColor={colors.gray300} lightColor={colors.black}></View>
          <View
            style={[
              styles.horizontalSection,
              { marginHorizontal: Platform.OS === "android" ? 15 : 35 },
            ]}
          >
            <View style={styles.contentSection}>
              <View style={styles.icon}>
                <Feather name="clipboard" size={30} style={[styleDynamic.icon_color]} />
              </View>
              <View style={styles.textSection}>
                <Text style={styles.title} lightColor={colors.black} darkColor={colors.gray300}>
                  Seuil formulaire
                </Text>

                <Text style={styles.subtitle} lightColor={colors.gray500} darkColor={colors.gray0}>
                  Notifie des alertes de paliers de formulaires remplis
                </Text>
              </View>
            </View>
            <Switch
              onValueChange={setGoalSwitchValue}
              value={goalswitchValue}
              thumbColor={goalswitchValue ? secondthumbColorOn : secondthumbColorOff}
              trackColor={{
                false: secondtrackColorOff,
                true: secondtrackColorOn,
              }}
              ios_backgroundColor={secondtrackColorOff}
              disabled={!isSaved}
            />
          </View>
          <View style={styles.line} darkColor={colors.gray300} lightColor={colors.black}></View>
          <View
            style={[
              styles.horizontalSection,
              { marginHorizontal: Platform.OS === "android" ? 15 : 35 },
            ]}
          >
            <View style={styles.contentSection}>
              <View style={styles.icon}>
                <Feather name="check-circle" size={30} style={[styleDynamic.icon_color]} />
              </View>
              <View style={styles.textSection}>
                <Text style={styles.title} lightColor={colors.black} darkColor={colors.gray300}>
                  Inscriptions aux évènements
                </Text>

                <Text style={styles.subtitle} lightColor={colors.gray500} darkColor={colors.gray0}>
                  Notifie des alertes de status d&apos;inscription à un évènement
                </Text>
              </View>
            </View>
            <Switch
              onValueChange={setParticipationSwitchValue}
              value={participationSwitchValue}
              thumbColor={participationSwitchValue ? secondthumbColorOn : secondthumbColorOff}
              trackColor={{
                false: secondtrackColorOff,
                true: secondtrackColorOn,
              }}
              ios_backgroundColor={secondtrackColorOff}
              disabled={!isSaved}
            />
          </View>
          <View style={styles.line} darkColor={colors.gray300} lightColor={colors.black}></View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
