import React, { useContext, useLayoutEffect, useState } from "react";
import { Alert, Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { View } from "../../components/Themed";
import InputTemplate from "../../components/FormTemplate/InputTemplate";
import DropDownTemplate from "../../components/FormTemplate/DropDownTemplate";
import LabelTemplate from "../../components/FormTemplate/LabelTemplate";
import { Controller, useForm } from "react-hook-form";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ButtonTemplate from "../../components/FormTemplate/ButtonTemplate";
import LoaderApi from "../../components/LoaderApi";
import ErrorMessageTemplate from "../../components/FormTemplate/ErrorMessageTemplate";
import { emailNextURegex, nameRegex, phoneRegex } from "../../lib/regexFields";
import { ThemeContext } from "../../hooks/useColorScheme";
import { colors } from "../../config/styles/01-settings/_colors";
import styles from "./UserEditScreenStyle";

export default function UserEditScreen(): React.JSX.Element {
  const colorTheme = useContext(ThemeContext);

  const genderOptions = [
    { value: 1, label: "Femme" },
    { value: 2, label: "Homme" },
    { value: 3, label: "Intersexe" },
  ];

  const tshirtSizeOptions = [
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];

  const pcPortsOptions = [
    { value: "hdmi", label: "HDMI" },
    { value: "typeC", label: "Type-C" },
    { value: "vga", label: "VGA" },
  ];

  const userInfos = useSelector((state: any) => state.userInfos);

  const sortedPorts = [...(userInfos?.computerPorts ?? [])];
  sortedPorts.sort((a, b) => a?.label?.localeCompare(b?.label));

  const initialFields = {
    firstname: userInfos?.firstname ?? "",
    lastname: userInfos?.lastname ?? "",
    email: userInfos?.email ?? "",
    tel: userInfos?.tel ?? "",
    school: userInfos?.school.name ?? "",
    gender: userInfos?.gender ?? "",
    birthday: userInfos?.birthday ?? "",
    tshirtSize: userInfos?.tShirtSize ?? "",
    pcPorts: sortedPorts ?? [],
  };

  function getGenderLabel(value: number): string {
    const genderOption = genderOptions.find((option) => option.value === value);
    return genderOption != null ? genderOption.label : "";
  }

  const [birthday] = useState<string>(
    userInfos.birthday
      ? userInfos.birthday.replace(/^"|"$/g, "").split("T")[0].split("-").reverse().join("/")
      : ""
  );

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { handleSubmit, control, formState, trigger, reset } = useForm({
    defaultValues: {
      firstname: initialFields.firstname,
      lastname: initialFields.lastname,
      gender: getGenderLabel(initialFields.gender),
      birthday,
      email: initialFields.email,
      tel: initialFields.tel,
      school: initialFields.school,
      tshirtSize: initialFields.tshirtSize,
      pcPorts: initialFields.pcPorts,
    },
  });

  const isFormValid = formState.isValid;
  const isFormDirty = formState.isDirty;

  const [openTshirtSizeDropDown, setOpenTshirtSizeDropDown] = useState(false);
  const [openPcPortsDropDown, setOpenPcPortsDropDown] = useState(false);

  const placeholder = {
    fNameph: "e.g., John",
    lNameph: "e.g., Doe",
    emailph: "nom.prenom@next-u.fr",
    phoneph: "e.g., +33 6 •• •• •• ••",
    schoolph: "e.g., WebTech Institute",
    genreph: "e.g., Homme",
    shirtph: "e.g., M",
    portph: "e.g., HDMI",
  };

  const onSubmit = (data: { tel: string; tshirtSize: string; pcPorts: string[] }): void => {
    if (isFormValid && isFormDirty) {
      const newInfos = {
        email: userInfos.email,
        tel: data.tel,
        tShirtSize: data.tshirtSize,
        computerPorts: data.pcPorts,
      };

      setLoading(true);
      void putAPI({
        objectType: "user-ambassador",
        options: "/update-infos",
        dataToTransfert: newInfos,
      }).then((resp) => {
        setLoading(false);
        if (resp) {
          dispatch(updateUserInfos(newInfos));
          reset(data);
        } else {
          Alert.alert(
            "Erreur d'enregistrement",
            "Une erreur est survenue lors de l'enregistrement des nouvelles informations, veuillez réessayer dans quelques instants."
          );
        }
      });
    } else {
      Alert.alert(
        "Présence de champs non valides",
        "Veuillez vérifier les valeurs entrées dans les champs du formulaire. Certaines sont incorrectes."
      );
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <GestureHandlerRootView>
          <ButtonTemplate
            isFormValid={isFormValid && isFormDirty}
            handleSubmit={handleSubmit(onSubmit)}
          />
        </GestureHandlerRootView>
      ),
    });
  }, [navigation, isFormValid, isFormDirty]);

  return (
    <GestureHandlerRootView
      style={[
        styles.container,
        {
          backgroundColor:
            colorTheme?.isDark ?? false ? colors.backgroundDark : colors.backgroundDefault,
        },
      ]}
    >
      <LoaderApi visible={loading} />
      <ScrollView>
        <View
          style={{
            backgroundColor: "transparent",
            paddingBottom: 25,
            marginHorizontal: Platform.OS === "ios" ? 40 : 30,
          }}
        >
          <Controller
            control={control}
            render={({ field }) => (
              <View style={{ backgroundColor: "transparent" }}>
                <LabelTemplate name="Prénom" required />
                <InputTemplate
                  value={field.value}
                  placeholder={placeholder.fNameph}
                  onChangeText={field.onChange}
                  secureTextEntry={false}
                  showPassword={false}
                  multiline={false}
                  editable={false}
                />
              </View>
            )}
            name="firstname"
            rules={{
              required: true,
            }}
          />

          <Controller
            control={control}
            render={({ field }) => (
              <View style={{ backgroundColor: "transparent" }}>
                <LabelTemplate name="Nom" required />
                <InputTemplate
                  value={field.value}
                  placeholder={placeholder.lNameph}
                  onChangeText={field.onChange}
                  secureTextEntry={false}
                  showPassword={false}
                  multiline={false}
                  editable={false}
                />
              </View>
            )}
            name="lastname"
            rules={{
              required: true,
              pattern: {
                value: nameRegex.pattern,
                message: "Le nom ne doit contenir que des lettres.",
              },
            }}
          />
          <Controller
            control={control}
            render={({ field }) => (
              <View style={{ backgroundColor: "transparent" }}>
                <LabelTemplate name="Genre" required />
                <InputTemplate
                  value={field.value}
                  placeholder={placeholder.genreph}
                  onChangeText={(gender) => {
                    field.onChange(gender);
                  }}
                  secureTextEntry={false}
                  showPassword={false}
                  multiline={false}
                  editable={false}
                />
              </View>
            )}
            name="gender"
            rules={{ required: true }}
          />
          <Controller
            control={control}
            render={({ field }) => (
              <View style={{ backgroundColor: "transparent" }}>
                <LabelTemplate name="Date de naissance" required />
                <InputTemplate
                  value={field.value}
                  placeholder="dd/mm/yyyy"
                  onChangeText={field.onChange}
                  secureTextEntry={false}
                  showPassword={false}
                  multiline={false}
                  editable={false}
                />
              </View>
            )}
            name="birthday"
            rules={{ required: true }}
          />
          <Controller
            control={control}
            render={({ field }) => (
              <View style={{ backgroundColor: "transparent" }}>
                <LabelTemplate name="E-mail" required />
                <InputTemplate
                  value={field.value}
                  placeholder={placeholder.emailph}
                  onChangeText={(val: any) => {
                    field.onChange(val.trim());
                    void trigger();
                  }}
                  secureTextEntry={false}
                  showPassword={false}
                  multiline={false}
                  editable={true}
                  regex={emailNextURegex.pattern}
                />
                {formState.errors.email != null && (
                  <ErrorMessageTemplate
                    errors={formState?.errors?.email}
                    minLength={emailNextURegex.min}
                    maxLength={emailNextURegex.max}
                    currentLength={field.value?.length ?? 0}
                  />
                )}
              </View>
            )}
            name="email"
            rules={{
              required: true,
              minLength: emailNextURegex.min,
              maxLength: emailNextURegex.max,
              pattern: {
                value: emailNextURegex.pattern,
                message: emailErrors.invalidFormat + emailErrors.notNextU,
              },
            }}
          />
          <Controller
            control={control}
            render={({ field }) => (
              <View style={{ backgroundColor: "transparent" }}>
                <LabelTemplate name="Téléphone portable" required />
                <InputTemplate
                  value={field.value}
                  placeholder={placeholder.phoneph}
                  onChangeText={(val: string) => {
                    void trigger();
                    field.onChange(val.trim());
                  }}
                  secureTextEntry={false}
                  showPassword={false}
                  multiline={false}
                  regex={phoneRegex.pattern}
                />
                {formState.errors.tel != null && (
                  <ErrorMessageTemplate errors={formState?.errors?.tel} />
                )}
              </View>
            )}
            name="tel"
            rules={{
              required: true,
              pattern: {
                value: phoneRegex.pattern,
                message: "Le numéro de téléphone n'est pas valide.",
              },
            }}
          />
          <Controller
            control={control}
            render={({ field }) => (
              <View style={{ backgroundColor: "transparent" }}>
                <LabelTemplate name="Ecole" required />
                <InputTemplate
                  value={field.value}
                  placeholder={placeholder.schoolph}
                  secureTextEntry={false}
                  showPassword={false}
                  multiline={false}
                  editable={false}
                />
              </View>
            )}
            name="school"
            rules={{
              required: true,
              validate: (value) => {
                return value.trim() !== "";
              },
            }}
          />
          <Controller
            control={control}
            render={({ field }) => (
              <>
                <LabelTemplate name="Taille de T-shirt" required />
                <DropDownTemplate
                  modalTitle="Sélection de la taille de T-shirt"
                  placeholder={placeholder.shirtph}
                  open={openTshirtSizeDropDown}
                  value={field.value}
                  items={tshirtSizeOptions}
                  setOpen={setOpenTshirtSizeDropDown}
                  setValue={(value) => {
                    field.onChange(value);
                  }}
                  isValid={true}
                  setIsValid={() => {}}
                  multiple={false}
                  translation={{
                    NOTHING_TO_SHOW: "Aucune taille de t-shirt disponible",
                  }}
                />
              </>
            )}
            name="tshirtSize"
            rules={{
              required: true,
            }}
          />

          <Controller
            control={control}
            render={({ field }) => (
              <>
                <LabelTemplate name="Ports du PC" required />
                <DropDownTemplate
                  modalTitle="Sélection des ports PC"
                  placeholder={placeholder.portph}
                  open={openPcPortsDropDown}
                  value={field.value}
                  items={pcPortsOptions}
                  setOpen={setOpenPcPortsDropDown}
                  setValue={(value) => {
                    const sorted = [...value];
                    sorted.sort();
                    field.onChange(sorted);
                  }}
                  isValid={true}
                  setIsValid={() => {}}
                  multiple={true}
                  translation={{
                    NOTHING_TO_SHOW: "Aucun port de PC disponible",
                  }}
                />
              </>
            )}
            name="pcPorts"
            rules={{
              required: true,
            }}
          />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
