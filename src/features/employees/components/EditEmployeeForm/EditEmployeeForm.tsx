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
  const {
    isValid,
    values,
    handleChange,
    handleBlur,
    errors,
    submitForm,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: EmployeeSchema,
    validateOnBlur: true,
    onSubmit,
  });

  const handleSubmit = () => submitForm();

  return (
    <View>
      <FormGroup label="Name" error={touched.name && errors.name}>
        <StyledTextInput
          onChangeText={handleChange("name")}
          onBlur={handleBlur("name")}
          value={values.name}
          isError={!!(touched.name && errors.name)}
        />
      </FormGroup>
      <FormGroup label="Surname" error={touched.surname && errors.surname}>
        <StyledTextInput
          onChangeText={handleChange("surname")}
          onBlur={handleBlur("surname")}
          value={values.surname}
          isError={!!(touched.surname && errors.surname)}
        />
      </FormGroup>
      <FormGroup label="Email" error={touched.email && errors.email}>
        <StyledTextInput
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
          isError={!!(touched.email && errors.email)}
        />
      </FormGroup>
      <StyledButtonWrapper>
        <Button disabled={!isValid} onPress={handleSubmit} title="Submit" />
      </StyledButtonWrapper>
    </View>
  );
};
