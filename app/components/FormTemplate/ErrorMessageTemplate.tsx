import React from "react";
import { Text, View } from "../Themed";
import styles from "./ErrorMessageTemplateStyle";
import { type FieldError, type FieldErrorsImpl, type Merge } from "react-hook-form";

interface ErrorMessageTemplateParams {
  errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  minLength?: number;
  maxLength?: number;
  currentLength?: number;
}

export default function ErrorMessageTemplate({
  errors,
  minLength,
  maxLength,
  currentLength,
}: ErrorMessageTemplateParams): React.JSX.Element {
  return (
    <View style={[styles.mainContainer]}>
      <View>
        {errors.type === "minLength" && (
          <View style={[styles.lenghtContainer]}>
            <Text style={[styles.textError]}>
              {currentLength} / {minLength}
            </Text>
          </View>
        )}
        {errors.type === "maxLength" && (
          <View style={[styles.lenghtContainer]}>
            <Text style={[styles.textError]}>
              {currentLength} / {maxLength}
            </Text>
          </View>
        )}
        {errors.type === "pattern" && (
          <View style={[styles.regexContainer]}>
            <Text style={[styles.textError]}>{errors?.message ?? ""}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
