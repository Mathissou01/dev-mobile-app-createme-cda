import React, { useContext, useLayoutEffect, useState } from "react";
import { Alert, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "../../components/Themed";
import LabelTemplate from "../../components/FormTemplate/LabelTemplate";
import InputTemplate from "../../components/FormTemplate/InputTemplate";
import DropDownTemplate from "../../components/FormTemplate/DropDownTemplate";
import ButtonTemplate from "../../components/FormTemplate/ButtonTemplate";
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import LoaderApi from "../../components/LoaderApi";
import { subjectErrors, messageErrors } from "../../lib/errorsMessage";
import ErrorMessageTemplate from "../../components/FormTemplate/ErrorMessageTemplate";
import { messageRegex, subjectRegex } from "../../lib/regexFields";
import { colors } from "../../config/styles/01-settings/_colors";
import { ThemeContext } from "../../hooks/useColorScheme";
import styles from "./HelpScreenStyle.js";

export default function HelpScreen(): React.JSX.Element {
  const { handleSubmit, control, formState, trigger, reset } = useForm();
  const colorTheme = useContext(ThemeContext);
  const isFormValid = formState.isValid;
  const navigation = useNavigation();
  const width = Dimensions.get("window").width;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonTemplate isFormValid={isFormValid} handleSubmit={handleSubmit(onSubmit)} />
      ),
    });
  }, [navigation, isFormValid]);

  const [loading, setLoading] = useState(false);

  const userInfos = useSelector((state: RootState) => state.userInfos);

  const placeholder = {
    subjectph: "e.g., problème d'affichage",
    typeph: "e.g., Bug page home",
    messageph: "Description du problème...",
  };

  const messagesType = [
    { label: "Signaler un bug", value: 1 },
    { label: "Demande d'aide", value: 2 },
    { label: "Demande d'informations", value: 3 },
    { label: "Demande de modifications", value: 4 },
    { label: "Demande d'ajout", value: 5 },
    { label: "Autre demande", value: 6 },
  ];

  const [openMessageTypeDropDown, setOpenMessageTypeDropDown] = useState<boolean>(false);

  const onSubmit = (data: { message: string; messageType: number; subject: string }): void => {
    if (isFormValid) {
      const newDemande = {
        user: userInfos._id,
        message: data.message.trim(),
        messageType: data.messageType,
        subject: data.subject.trim(),
      };
      setLoading(true);
      void postAPI({
        objectType: "askForHelp",
        dataToTransfert: newDemande,
      }).then((resp) => {
        setLoading(false);
        if (resp) {
          Alert.alert("Demande envoyée", "Ta demande a bien été envoyée !");
          reset();
        } else {
          Alert.alert(
            "Erreur d'enregistrement",
            "Une erreur est survenue lors de l'enregistrement de ta demande, Réessaye dans quelques instants."
          );
        }
      });
    } else {
      console.log("Veille à remplir tous les champs correctement.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        styles.container,
        {
          backgroundColor:
            colorTheme?.isDark ?? false ?? false ? colors.backgroundDark : colors.backgroundDefault,
        },
      ]}
    >
      <LoaderApi visible={loading} />
      <ScrollView
        style={{ backgroundColor: "transparent" }}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView
          edges={["left", "right"]}
          style={{ backgroundColor: "transparent", marginTop: 20 }}
        >
          <View
            style={{
              backgroundColor: "transparent",
              marginHorizontal: Platform.OS === "ios" ? 40 : 30,
              paddingBottom: width <= 380 ? 20 : 0,
            }}
          >
            <View style={{ backgroundColor: "transparent" }}>
              <Text bold style={[styles.textPrinciple]}>
                Un problème ?
              </Text>
              <Text bold style={[styles.textPrinciple]}>
                Une demande ?
              </Text>
              <Text style={[styles.textPrinciple]}>Nous sommes à l&rsquo;écoute !</Text>
            </View>
            <Controller
              control={control}
              render={({ field }) => (
                <View style={{ backgroundColor: "transparent" }}>
                  <LabelTemplate name="Sujet" required />
                  <InputTemplate
                    value={field.value}
                    placeholder={placeholder.subjectph}
                    onChangeText={(val: any) => {
                      field.onChange(val);
                      void trigger();
                    }}
                    secureTextEntry={false}
                    showPassword={false}
                    multiline={false}
                    regex={subjectRegex.pattern}
                  />
                  {formState.errors.subject != null && (
                    <ErrorMessageTemplate
                      errors={formState?.errors?.subject}
                      minLength={subjectRegex.min}
                      maxLength={subjectRegex.max}
                      currentLength={field.value?.length ?? 0}
                    />
                  )}
                </View>
              )}
              name="subject"
              rules={{
                required: true,
                minLength: subjectRegex.min,
                maxLength: subjectRegex.max,
                pattern: {
                  value: subjectRegex.pattern,
                  message: subjectErrors.empty,
                },
              }}
              defaultValue=""
            />
            <Controller
              control={control}
              render={({ field }) => (
                <>
                  <LabelTemplate name="Type de message" required />
                  <DropDownTemplate
                    modalTitle="Type de message"
                    placeholder={placeholder.typeph}
                    open={openMessageTypeDropDown}
                    value={field.value}
                    items={messagesType}
                    setOpen={setOpenMessageTypeDropDown}
                    setValue={(value) => {
                      field.onChange(value);
                    }}
                    isValid={true}
                    setIsValid={() => {}}
                    multiple={false}
                    translation={{
                      NOTHING_TO_SHOW: "Aucun type de message disponible",
                    }}
                  />
                </>
              )}
              name="messageType"
              defaultValue=""
              rules={{
                required: true,
              }}
            />
            <Controller
              control={control}
              render={({ field }) => (
                <View style={{ backgroundColor: "transparent" }}>
                  <LabelTemplate name="Message" required />
                  <InputTemplate
                    value={field.value}
                    placeholder={placeholder.messageph}
                    onChangeText={(val: any) => {
                      field.onChange(val);
                      void trigger();
                    }}
                    secureTextEntry={false}
                    showPassword={false}
                    multiline={true}
                    numberOfLines={10}
                    regex={messageRegex.pattern}
                  />
                  {formState.errors.message != null && (
                    <ErrorMessageTemplate
                      errors={formState?.errors?.message}
                      minLength={messageRegex.min}
                      maxLength={messageRegex.max}
                      currentLength={field.value?.length ?? 0}
                    />
                  )}
                </View>
              )}
              name="message"
              rules={{
                minLength: messageRegex.min,
                maxLength: messageRegex.max,
                required: true,
                pattern: {
                  value: messageRegex.pattern,
                  message: messageErrors.empty,
                },
              }}
              defaultValue=""
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
