import { useFormik } from "formik";
import { FC } from "react";
import { View, Button, Text } from "react-native";
import { EditableEmployeeFields } from "../../../../types/entities/Employee";
import * as Yup from "yup";
import { FormGroup } from "../../../../components/primitives/FormGroup/FormGroup";
import { StyledTextInput } from "../../../../components/styledComponents/StyledTextInput";
import styled from "styled-components/native";

const EmployeeSchema = Yup.object().shape({
  avatar: Yup.string().nullable(),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  surname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const StyledButtonWrapper = styled.View`
  margin-top: 20px;
`;

export type EditEmployeeFormProps = {
  initialValues?: EditableEmployeeFields;
  onSubmit: (formData: EditableEmployeeFields) => void;
};

const initialFormState: EditableEmployeeFields = {
  avatar: null,
  email: "",
  name: "",
  surname: "",
};

//@todo add avatar
export const EditEmployeeForm: FC<EditEmployeeFormProps> = ({
  initialValues = initialFormState,
  onSubmit,
}) => {
  const { isValid, values, handleChange, handleBlur, errors } = useFormik({
    initialValues,
    validateOnBlur: true,
    validationSchema: EmployeeSchema,
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  const handleSubmit = () => onSubmit(values);

  return (
    <View>
      <FormGroup label="Name" error={errors.name}>
        <StyledTextInput
          onChangeText={handleChange("name")}
          onBlur={handleBlur("name")}
          value={values.name}
          isError={!!errors.name}
        />
      </FormGroup>
      <FormGroup label="Surname" error={errors.surname}>
        <StyledTextInput
          onChangeText={handleChange("surname")}
          onBlur={handleBlur("surname")}
          value={values.surname}
          isError={!!errors.surname}
        />
      </FormGroup>
      <FormGroup label="Email" error={errors.email}>
        <StyledTextInput
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
          isError={!!errors.email}
        />
      </FormGroup>
      <StyledButtonWrapper>
        <Button disabled={!isValid} onPress={handleSubmit} title="Submit" />
      </StyledButtonWrapper>
    </View>
  );
};
