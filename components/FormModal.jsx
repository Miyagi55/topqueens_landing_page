import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const FormModal = ({ closeModal }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    closeModal();
  };

  return (
    <ModalBackground>
      <ModalContainer
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <CloseButton onClick={closeModal}>X</CloseButton>
        <h2>Apply to TQA</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name:</label>
          <input {...register("name")} required />

          <label>Age:</label>
          <input type="number" {...register("age")} required />

          <label>Country:</label>
          <input {...register("country")} required />

          <label>Email:</label>
          <input type="email" {...register("email")} required />

          <label>Instagram Link:</label>
          <input {...register("igLink")} required />

          <label>Cellphone Model:</label>
          <input {...register("cellphoneModel")} required />

          <label>Exposition:</label>
          <select {...register("exposition")} required>
            <option value="full">Full Nudity</option>
            <option value="faceless">Faceless</option>
            <option value="lingerie">Just Lingerie</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </ModalContainer>
    </ModalBackground>
  );
};

export default FormModal;
